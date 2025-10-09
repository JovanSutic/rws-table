import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { createFileRoute } from "@tanstack/react-router";
import VirtualizedTable from "../components/Table";
import { Button, Pagination } from "@mui/material";
import {
  billStatus,
  type BillInternal,
  type BillStatusType,
} from "../api/bill.types";
import { billAllSearchSchema } from "../validations/schema";
import Modal from "../components/Modal";
import { useMemo, useState, useCallback } from "react";
import BillTitles from "../components/BillTitles";
import { useFavoritesStore } from "../store/favorites";
import { createBillColumns } from "../components/utils/createBillColumns";
import FavoritesModal from "../components/FavoritesModal";
import FavoritesSnack from "../components/FavoritesSnack";
import { useBillsQuery } from "../hooks/useBillsQuery";
import { useBillFavorites } from "../hooks/useBillFavorites";

export const Route = createFileRoute("/bills/all")({
  validateSearch: (search) => billAllSearchSchema.parse(search),
  component: RouteComponent,
});

function RouteComponent() {
  const [titleModalOpen, setTitleModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<BillInternal | null>(null);

  const { isFavorite, favoriteVersion } = useFavoritesStore();
  const { status, page } = Route.useSearch();
  const navigate = Route.useNavigate();
  const pageCount = 10;

  const { isLoading, billsData, dataUpdatedAt, error } = useBillsQuery();

  const {
    favoriteModalOpen,
    setFavoriteModalOpen,
    addFavoriteMutation,
    removeFavoriteMutation,
    snackOpen,
    setSnackOpen,
    errorSnackOpen,
    setErrorSnackOpen,
    errorMessage,
    snackBill,
    isPending,
  } = useBillFavorites();

  const selectStatus = status || "";
  const selectedRowIsFavorite = selectedRow
    ? isFavorite(selectedRow.id)
    : false;

  const handleStatusChange = (newStatus: BillStatusType | "") => {
    navigate({
      search: (prev) => ({
        ...prev,
        status: newStatus === "" ? undefined : (newStatus as BillStatusType),
        page: 1,
      }),
      to: "/bills/all",
    });
  };

  const handlePageChange = (newPage: number) => {
    navigate({
      search: (prev) => ({
        ...prev,
        page: newPage,
      }),
      to: "/bills/all",
    });
  };

  const handleFavoriteToggle = useCallback((bill: BillInternal) => {
    setSelectedRow(bill);
    setFavoriteModalOpen(true);
  }, []);

  const handleFavoriteConfirm = useCallback(() => {
    if (!selectedRow) return;

    if (isFavorite(selectedRow.id)) {
      removeFavoriteMutation.mutate(selectedRow);
    } else {
      addFavoriteMutation.mutate(selectedRow);
    }
  }, [selectedRow?.id]);

  const columns = useMemo(
    () => createBillColumns(handleFavoriteToggle, isFavorite),
    []
  );

  const billsContent = useMemo(
    () => (
      <Box
        sx={{
          width: { xs: "100%", md: "924px" },
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingX: "4px",
          paddingTop: "20px",
          paddingBottom: "32px",
          boxSizing: "border-box",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "end" },
          }}
        >
          <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
            <InputLabel id="bill-status-label">Bill status</InputLabel>
            <Select
              labelId="bill-status-label"
              id="bill-status"
              disabled={isLoading || Boolean(error)}
              value={selectStatus}
              label="Bill status"
              onChange={(e) =>
                handleStatusChange(e.target.value as BillStatusType | "")
              }
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              {Object.values(billStatus).map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <VirtualizedTable
          data={billsData?.results || []}
          loading={isLoading}
          columns={columns}
          error={error?.message}
          onRowClick={(row) => {
            setSelectedRow(row);
            setTitleModalOpen(true);
          }}
          containerStyle={{
            overflow: "auto",
            border: 1,
            borderColor: "divider",
            boxSizing: "border-box",
            width: { xs: "100%", md: "fit-content" },
          }}
        />
        <Pagination
          variant="outlined"
          color="primary"
          disabled={isLoading || Boolean(error)}
          count={Math.ceil(
            (billsData?.count.billCount || pageCount) / pageCount
          )}
          page={page || 1}
          onChange={(_, page) => handlePageChange(page)}
        />
      </Box>
    ),
    [dataUpdatedAt, isLoading, favoriteVersion, selectStatus, page]
  );

  return (
    <>
      <Modal open={titleModalOpen} onClose={() => setTitleModalOpen(false)}>
        <Modal.Title>Bill titles</Modal.Title>
        <Modal.Content>
          <BillTitles bill={selectedRow} />
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setTitleModalOpen(false)}>Close</Button>
        </Modal.Actions>
      </Modal>

      <FavoritesModal
        open={favoriteModalOpen}
        onClose={() => setFavoriteModalOpen(false)}
        isFavorite={selectedRowIsFavorite}
        bill={selectedRow}
        onConfirm={handleFavoriteConfirm}
        loading={isPending}
        mode="toggle"
      />

      <FavoritesSnack
        open={snackOpen || errorSnackOpen}
        onClose={() => {
          setSnackOpen(false);
          setErrorSnackOpen(false);
        }}
        message={errorMessage || `Bill ${snackBill?.billNumber} ${selectedRowIsFavorite ? "saved to" : "removed from"} favorites successfully.`}
        severity={errorSnackOpen ? "error" : "success"}
        autoHideDuration={errorSnackOpen ? 5000 : undefined}
      />

      {billsContent}
    </>
  );
}
