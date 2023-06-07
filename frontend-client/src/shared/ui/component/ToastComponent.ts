import { toast } from "react-toastify";

export const error = ({
  message,
  position = "top-center",
  autoClose = 5000,
  hideProgressBar = false,
  closeOnClick = true,
  pauseOnHover = true,
  draggable = true,
  progress = undefined,
  theme = "light",
}: any) => {
  toast.error(`${message} 🙁`, {
    position: position,
    autoClose: autoClose,
    hideProgressBar: hideProgressBar,
    closeOnClick: closeOnClick,
    pauseOnHover: pauseOnHover,
    draggable: draggable,
    progress: progress,
    theme: theme,
  });
};

export const success = ({
  message,
  position = "top-center",
  autoClose = 5000,
  hideProgressBar = false,
  closeOnClick = true,
  pauseOnHover = true,
  draggable = true,
  progress = undefined,
  theme = "light",
}: any) => {
  toast.success(`${message} 🥳`, {
    position: position,
    autoClose: autoClose,
    hideProgressBar: hideProgressBar,
    closeOnClick: closeOnClick,
    pauseOnHover: pauseOnHover,
    draggable: draggable,
    progress: progress,
    theme: theme,
  });
};
