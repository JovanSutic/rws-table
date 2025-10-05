import { Button } from "@mui/material";
import Modal from "./Modal";
import type { FavoritesModalProps } from "./types/favorites.types";

export default function FavoritesModal({
  open,
  onClose,
  bill,
  isFavorite,
  onConfirm,
  mode = "toggle",
  loading = false,
}: FavoritesModalProps) {
  if (!bill) return null;

  const handleConfirm = () => {
    onConfirm(bill);
  };

  const action =
    mode === "remove-only" ? "remove" : isFavorite ? "remove" : "add";

  const title =
    action === "remove" ? "Remove from Favorites" : "Add to Favorites";
  const message =
    action === "remove"
      ? `Would you like to remove bill ${bill.billNumber} from your favorites?`
      : `Would you like to save bill ${bill.billNumber} to your favorites?`;
  const confirmText = action === "remove" ? "Remove" : "Save";
  const confirmColor = action === "remove" ? "error" : "primary";

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Title>{title}</Modal.Title>
      <Modal.Content text>{message}</Modal.Content>
      <Modal.Actions>
        <Button onClick={onClose} loading={loading}>
          Cancel
        </Button>
        <Button
          onClick={handleConfirm}
          loading={loading}
          variant="contained"
          color={confirmColor}
        >
          {confirmText}
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
