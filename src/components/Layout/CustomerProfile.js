import React, { useEffect } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  ListItemText,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import axios from "axios";
import { proxy } from "../../proxy";

function CustomerProfile() {
  useEffect(() => {
    let token = localStorage.getItem("jwtToken");
    axios
      .get(`${proxy}/api/v1/user/loggedInCustomerInfo`, {
        headers: { Authorization: `${token}` },
      })
      .then((res) => {
        if (res.data.success === true && res.data.token !== "") {
          // props.history.push("/customer_profile");

          console.log(res);
        } else {
          alert("Incurrect email or password");
        }
      });
  }, []);

  return (
    <div>
      <h4 style={{ textAlign: "center" }}>Customer Profile</h4>
      <Grid container>
        <Grid item xs={3}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Cart" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="ProfileInfo" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Wishlist" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Card Details" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={9}>
          Content
        </Grid>
      </Grid>
    </div>
  );
}

export default CustomerProfile;
