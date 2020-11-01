import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import axios from "axios";
import { proxy } from "../../proxy";

export default function EmailVerified(props) {
  const [open, setOpen] = React.useState(true);
  const [otp, setOtp] = React.useState("");

  const handleClear = () => {
    setOtp("");
  };
  const fieldFillup = () => {
    if (otp === " ") {
      return false;
    } else {
      return true;
    }
  };
  const handleSubmit = () => {
    if (fieldFillup) {
      let token = localStorage.getItem("Token");
      axios
        .post(
          `${proxy}/api/v1/user/emailVerify`,
          { otp: otp },
          {
            headers: { Authorization: `${token}` },
          }
        )
        .then((res) => {
         
          if (res.data.success === true && res.data.token !== "") {
            handleClear();
            alert("Your account is verified !!");
            console.log(res.data.message);
            props.history.push("/");
          } else {
            alert(res.data.message);
            props.history.push("/");
          }
        });

      setOpen(false);
    } else {
      alert("Please type OTP");
    }
  };

  return (
    <div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"> Account Verification</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please verify your account. When register your account your email
            got a OTP. Please your currect OTP. It is secret don't share anyone.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Type OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color="primary" variant="outlined">
            Cancel
          </Button> */}
          <Button onClick={handleSubmit} color="primary" variant="outlined">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
