import type { BillInternal } from "../../api/bill.types";

export interface FavoritesSnackbarProps {
  open: boolean;
  onClose: () => void;
  autoHideDuration?: number;
  message?: string;
  severity?: "success" | "info" | "error";
}

export interface FavoritesModalProps {
  open: boolean;
  onClose: () => void;
  bill: BillInternal | null;
  isFavorite: boolean;
  onConfirm: (bill: BillInternal) => void;
  mode?: "toggle" | "remove-only";
  loading?: boolean;
}
