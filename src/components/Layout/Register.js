import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom";

import axios from "axios";
import { proxy } from "../../proxy";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap",
    fontSize: "4vh",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    // [theme.breakpoints.down("sm")]: {
    //   width: 500,
    // },
  },
}));

export default function Register() {
  const classes = useStyles();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const allFieldFilled = () => {
    if (name === " " || email === " " || password === " ") {
      return false;
    } else {
      return true;
    }
  };

  const handleClear = () => {
    setName(""), setEmail(""), setPassword("");
  };

  const handleRegistration = () => {
    if (allFieldFilled) {
      const insertData = {
        name: name,
        email: email,
        password: password,
      };
      axios.post(`${proxy}/api/v1/user/signup`, insertData).then((res) => {
        alert("Registration successfully");
        handleClear();
        console.log(res);
      });
    } else {
      alert("Please all field fillup mendatory");
    }
  };

  return (
    <div className={classes.root}>
      {/* <center> */}
      <div
        style={
          matches
            ? {
                /** Mobile view */
                marginRight: 20,
                paddingRight: 20,
                paddingBottom: 20,
                paddingLeft: 20,
                marginLeft: 20,
                marginTop: 80,
                borderWidth: "2px",
                borderStyle: "inset",
              }
            : {
                /** Desktop view */
                marginRight: 400,
                marginLeft: 400,
                paddingRight: 20,
                paddingLeft: 20,
                paddingBottom: 20,
                marginTop: 80,
                borderWidth: "2px",
                borderStyle: "inset",
              }
        }
      >
        <h2 align="center">Book Register</h2>
        <br />

        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <br />
          <TextField
            id="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <br />
          <TextField
            id="pass"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          <br />
          <Link to="/login">
            <Typography>Already have an account? Sign in</Typography>{" "}
          </Link>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "5px" }}
            fullWidth
            onClick={() => handleRegistration()}
          >
            Submit
          </Button>
        </form>
      </div>
      {/* </center> */}
    </div>
  );
}
