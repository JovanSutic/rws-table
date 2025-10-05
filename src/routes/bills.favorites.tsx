import { createFileRoute } from "@tanstack/react-router";
import { useFavoritesStore } from "../store/favorites";
import { Alert, Box, Snackbar } from "@mui/material";
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
  const { isFavorite } = useFavoritesStore();

  const { isLoading, billsData, dataUpdatedAt } = useFavoriteBillsQuery();

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
  }, [setFavoriteModalOpen]);

  const handleFavoriteConfirm = useCallback(() => {
    if (!selectedRow) return;

    removeFavoriteMutation.mutate(selectedRow);
  }, [removeFavoriteMutation, selectedRow]);

  const columns = useMemo(
    () => createBillColumns(handleFavoriteToggle, () => true),
    [handleFavoriteToggle]
  );

  const favoritesContent = useMemo(
    () => (
      <Box
        sx={{
          width: "100%",
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
        <VirtualizedTable
          data={billsData?.results || []}
          loading={isLoading}
          columns={columns}
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
    [dataUpdatedAt]
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
        open={snackOpen}
        onClose={() => setSnackOpen(false)}
        bill={snackBill}
        action={"removed"}
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

      {favoritesContent}
    </>
  );
}
