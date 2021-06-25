import { Snackbar } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

interface Props {
  open: boolean;
  severity: any;
  message: string;
  onClose: any;
}

const Alert = (props: AlertProps) => (
  <MuiAlert elevation={6} variant="filled" {...props} />
);

const SnackBar = (props: Props) => {
  const { open, severity, message, onClose } = props;

  const AnchorOrigin: any =
    severity !== "success"
      ? {
          vertical: "top",
          horizontal: "right",
        }
      : {
          vertical: "bottom",
          horizontal: "center",
        };
  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={onClose}
        anchorOrigin={AnchorOrigin}
      >
        <Alert onClose={onClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SnackBar;
