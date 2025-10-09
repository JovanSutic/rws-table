import { createFileRoute } from "@tanstack/react-router";
import { useFavoritesStore } from "../store/favorites";
import { Box } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import VirtualizedTable from "../components/Table";
import { createBillColumns } from "../components/utils/createBillColumns";
import type { BillInternal } from "../api/bill.types";
import FavoritesModal from "../components/FavoritesModal";
import FavoritesSnack from "../components/FavoritesSnack";
import { useFavoriteBillsQuery } from "../hooks/useFavoriteBillsQuery";
import { useBillFavorites } from "../hooks/useBillFavorites";

export const Route = createFileRoute("/bills/favorites")({
  component: RouteComponent,
});

function RouteComponent() {
  const [selectedRow, setSelectedRow] = useState<BillInternal | null>(null);
  const { isFavorite, favoriteVersion } = useFavoritesStore();

  const { isLoading, billsData, dataUpdatedAt, error } =
    useFavoriteBillsQuery();

  const {
    favoriteModalOpen,
    setFavoriteModalOpen,
    removeFavoriteMutation,
    snackOpen,
    setSnackOpen,
    errorSnackOpen,
    setErrorSnackOpen,
    errorMessage,
    snackBill,
    isPending,
  } = useBillFavorites();

  const selectedRowIsFavorite = selectedRow
    ? isFavorite(selectedRow.id)
    : false;

  const handleFavoriteToggle = useCallback((bill: BillInternal) => {
    setSelectedRow(bill);
    setFavoriteModalOpen(true);
  }, []);

  const handleFavoriteConfirm = useCallback(() => {
    if (!selectedRow) return;

    removeFavoriteMutation.mutate(selectedRow);
  }, [selectedRow?.id]);

  const columns = useMemo(
    () => createBillColumns(handleFavoriteToggle, () => true),
    []
  );

  const favoritesContent = useMemo(
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
        <VirtualizedTable
          data={billsData?.results || []}
          loading={isLoading}
          columns={columns}
          error={error?.message}
          containerStyle={{
            overflow: "auto",
            border: 1,
            borderColor: "divider",
            boxSizing: "border-box",
            width: { xs: "100%", md: "fit-content" },
          }}
        />
      </Box>
    ),
    [dataUpdatedAt, isLoading, favoriteVersion]
  );

  return (
    <>
      <FavoritesModal
        open={favoriteModalOpen}
        onClose={() => setFavoriteModalOpen(false)}
        isFavorite={selectedRowIsFavorite}
        bill={selectedRow}
        onConfirm={handleFavoriteConfirm}
        loading={isPending}
        mode="remove-only"
      />

      <FavoritesSnack
        open={snackOpen || errorSnackOpen}
        onClose={() => {
          setSnackOpen(false);
          setErrorSnackOpen(false);
        }}
        message={
          errorMessage ||
          `Bill ${snackBill?.billNumber} ${selectedRowIsFavorite ? "saved to" : "removed from"} favorites successfully.`
        }
        severity={errorSnackOpen ? "error" : "success"}
        autoHideDuration={errorSnackOpen ? 5000 : undefined}
      />

      {favoritesContent}
    </>
  );
}
