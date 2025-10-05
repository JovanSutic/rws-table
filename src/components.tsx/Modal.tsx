import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import type { ModalActionsProps, ModalContentProps, ModalProps, ModalTitleProps } from "./types/modal.types";



function Modal({ open, onClose, children, fullScreenBreakpoint = "md" }: ModalProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down(fullScreenBreakpoint));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
    >
      {children}
    </Dialog>
  );
}

function ModalTitle({ children, id = "modal-title" }: ModalTitleProps) {
  return <DialogTitle id={id}>{children}</DialogTitle>;
}

function ModalContent({ children, text = false }: ModalContentProps) {
  return (
    <DialogContent>
      {text ? <DialogContentText>{children}</DialogContentText> : children}
    </DialogContent>
  );
}

function ModalActions({ children }: ModalActionsProps) {
  return <DialogActions>{children}</DialogActions>;
}

Modal.Title = ModalTitle;
Modal.Content = ModalContent;
Modal.Actions = ModalActions;

export default Modal;