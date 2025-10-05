import { useMutation } from "@tanstack/react-query";
import { postAddFavoriteBill, postRemoveFavoriteBill } from "../api/bills";
import { useFavoritesStore } from "../store/favorites";
import { useState } from "react";
import type { BillInternal } from "../api/bill.types";

const getErrorMessage = (error: unknown, defaultMsg: string): string =>
  error instanceof Error ? error.message : defaultMsg;

export const useBillFavorites = () => {
  const { addFavorite, removeFavorite } = useFavoritesStore();

  const [snackOpen, setSnackOpen] = useState<boolean>(false);
  const [errorSnackOpen, setErrorSnackOpen] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [snackBill, setSnackBill] = useState<BillInternal | null>(null);
  const [favoriteModalOpen, setFavoriteModalOpen] = useState<boolean>(false);

  const addFavoriteMutation = useMutation({
    mutationFn: (bill: BillInternal) => postAddFavoriteBill(bill),
    onSuccess: (data: BillInternal, variables: BillInternal) => {
      addFavorite(data);
      setFavoriteModalOpen(false);
      setSnackBill(variables);
      setSnackOpen(true);
    },
    onError: (error, variables: BillInternal) => {
      setFavoriteModalOpen(false);
      setSnackBill(variables);
      setErrorMessage(
        getErrorMessage(error, "Failed to add bill to favorites")
      );
      setErrorSnackOpen(true);
    },
  });

  const removeFavoriteMutation = useMutation({
    mutationFn: (bill: BillInternal) => postRemoveFavoriteBill(bill),
    onSuccess: (data: { id: string }, variables: BillInternal) => {
      removeFavorite(data.id);
      setFavoriteModalOpen(false);
      setSnackBill(variables);
      setSnackOpen(true);
    },
    onError: (error, variables: BillInternal) => {
      setFavoriteModalOpen(false);
      setSnackBill(variables);
      setErrorMessage(
        getErrorMessage(error, "Failed to remove bill from favorites")
      );
      setErrorSnackOpen(true);
    },
  });

  return {
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
    isPending:
      addFavoriteMutation.isPending || removeFavoriteMutation.isPending,
  };
};
