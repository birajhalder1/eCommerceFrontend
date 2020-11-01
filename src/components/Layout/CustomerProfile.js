import React, { useEffect } from "react";

import axios from "axios";
import { proxy } from "../../proxy";

function CustomerProfile() {
  useEffect(() => {
    let token = localStorage.getItem("Token");
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
      <h1>Customer Profile</h1>
    </div>
  );
}

export default CustomerProfile;
