import { Snackbar, Alert } from "@mui/material";
import type { FavoritesSnackbarProps } from "./types/favorites.types";

export default function FavoritesSnack({
  open,
  onClose,
  severity,
  message,
  autoHideDuration = 3000,
}: FavoritesSnackbarProps) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
    >
      <div>
        {open && (
          <Alert
            onClose={onClose}
            severity={severity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        )}
      </div>
    </Snackbar>
  );
}
