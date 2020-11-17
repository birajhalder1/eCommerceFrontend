import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "50px",
    bottom: 0,
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
  copyright: {
    textAlign: "center",
    paddingTop: "15px",
  },
}));

const SampleFab2 = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.copyright}>
        &copy; 2019-{new Date().getFullYear()} | Ecommerce Pvt. Ltd.
      </Grid>
    </Grid>
  );
};

class Footer extends Component {
  render() {
    // const classes = useStyles();

    return <div>{/* <SampleFab2 /> */}</div>;
  }
}
export default Footer;
