import { Snackbar, Alert } from "@mui/material";
import type { FavoritesSnackbarProps } from "./types/favorites.types"; 


export default function FavoritesSnack({
  open,
  onClose,
  bill,
  action,
  severity,
  message,
  autoHideDuration = 3000,
}: FavoritesSnackbarProps) {
  
  let finalMessage = "";

  if (severity === "success") {
    if (bill && action) {
        const verb = action === "added" ? "saved to" : "removed from";
        finalMessage = `Bill ${bill.billNumber} ${verb} favorites successfully.`;
    } else {
        finalMessage = "Operation successful.";
    }
  } else if (severity === "error") {
    finalMessage = message || "An unexpected error occurred.";
    autoHideDuration = 5000;
  }
  
  if (!finalMessage) return null;


  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {finalMessage}
      </Alert>
    </Snackbar>
  );
}
