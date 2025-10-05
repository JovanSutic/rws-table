import type { ReactNode } from "react";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  fullScreenBreakpoint?: "xs" | "sm" | "md" | "lg" | "xl";
}

export interface ModalTitleProps {
  children: ReactNode;
  id?: string;
}

export interface ModalContentProps {
  children: ReactNode;
  text?: boolean;
}

export interface ModalActionsProps {
  children: ReactNode;
}
