
import { Snackbar } from "@mui/material";
import type { FavoritesSnackbarProps } from "./types/favorites.types";


export default function FavoritesSnack({
  open,
  onClose,
  bill,
  action,
  autoHideDuration = 3000,
}: FavoritesSnackbarProps) {
  const message =
    action === "added"
      ? `Bill ${bill?.billNumber} saved to favorites`
      : `Bill ${bill?.billNumber} removed from favorites`;

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      message={message}
    />
  );
}