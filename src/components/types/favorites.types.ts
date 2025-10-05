import type { BillInternal } from "../../api/bill.types";

export interface FavoritesSnackbarProps {
  open: boolean;
  onClose: () => void;
  bill: BillInternal | null;
  action: "added" | "removed";
  autoHideDuration?: number;
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
