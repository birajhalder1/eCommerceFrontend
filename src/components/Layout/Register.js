import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

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
  socialIcon: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 100,
    paddingRight: 100,
  },
  linkColor: {
    color: "blue",
    hoverColor: "red",
    textDecoration: "none",
  },
}));

export default function Register() {
  const classes = useStyles();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

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
        phone: phone,
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
        <Typography variant="h4" style={{ textAlign: "center" }}>
          Sign Up / Register
        </Typography>
        <Typography
          variant="subtitle2"
          style={{
            textAlign: "center",
            marginTop: "2%",
            fontSize: "1rem",
            fontWeight: "300",
          }}
        >
          with
        </Typography>
        <div className={classes.socialIcon}>
          <FacebookIcon
            style={{
              height: "50px",
              width: "50px",
              // backgroundColor: "#003399",
              cursor: "pointer",
              borderRadius: "50%",
              //   display: "inline-block"
            }}
          />
          <LinkedInIcon
            style={{
              height: "50px",
              width: "50px",
              // backgroundColor: "#0099ff",
              cursor: "pointer",
              borderRadius: "50%",
            }}
          />
          <GitHubIcon
            style={{
              height: "50px",
              width: "50px",
              //   backgroundColor: "blue",
              cursor: "pointer",
              borderRadius: "50%",
            }}
          />
        </div>

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
          <TextField
            id="phone"
            label="Phone No"
            value={phone}
            type="number"
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
          />
          <br />
          <br />
          <Link to="/login">
            <Typography style={{ textAlign: "center" }}>
              Already have an account? Sign in
            </Typography>{" "}
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
