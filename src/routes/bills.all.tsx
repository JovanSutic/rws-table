import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { createFileRoute } from "@tanstack/react-router";
import VirtualizedTable from "../components/Table";
import { Button, Pagination, Alert, Snackbar } from "@mui/material";
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

  const { isLoading, billsData, dataUpdatedAt } = useBillsQuery();

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
  }, [setFavoriteModalOpen]);

  const handleFavoriteConfirm = useCallback(() => {
    if (!selectedRow) return;

    if (selectedRowIsFavorite) {
      removeFavoriteMutation.mutate(selectedRow);
    } else {
      addFavoriteMutation.mutate(selectedRow);
    }
  }, [
    selectedRow,
    selectedRowIsFavorite,
    addFavoriteMutation,
    removeFavoriteMutation,
  ]);

  const handleModalClose = useCallback(() => {
    setFavoriteModalOpen(false);
  }, [setFavoriteModalOpen]);

  const tableContainerStyle = useMemo(
    () => ({
      overflow: "auto",
      border: 1,
      borderColor: "divider",
      boxSizing: "border-box",
      width: { xs: "100%", md: "fit-content" },
    }),
    []
  );

  const columns = useMemo(
    () => createBillColumns(handleFavoriteToggle, isFavorite),
    [handleFavoriteToggle, isFavorite]
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
          gap: "16px",
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
              disabled={isLoading}
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
          onRowClick={(row) => {
            setSelectedRow(row);
            setTitleModalOpen(true);
          }}
          containerStyle={tableContainerStyle}
        />
        <Pagination
          variant="outlined"
          color="primary"
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
        onClose={handleModalClose}
        isFavorite={selectedRowIsFavorite}
        bill={selectedRow}
        onConfirm={handleFavoriteConfirm}
        loading={isPending}
        mode="toggle"
      />

      <FavoritesSnack
        open={snackOpen}
        onClose={() => setSnackOpen(false)}
        bill={snackBill}
        action={selectedRowIsFavorite ? "added" : "removed"}
      />

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={errorSnackOpen}
        autoHideDuration={5000}
        onClose={() => setErrorSnackOpen(false)}
      >
        <Alert
          onClose={() => setErrorSnackOpen(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errorMessage}
        </Alert>
      </Snackbar>

      {billsContent}
    </>
  );
}
