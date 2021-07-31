import React, { useState } from "react";
import { Menu, MenuItem, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Icon } from "semantic-ui-react";

const AdminMenu = () => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const showDashboard = () => {
    history.push("/admin");
    setAnchorEl(null);
  };

  const handleLogout = () => {
    history.push("/logout");
    setAnchorEl(null);
  };

  const showUserMgmt = () => {
    history.push("./userMgmt");
    setAnchorEl(null);
  };

  return (
    <div className="d-flex justify-content-end">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleMenu}
      >
        <Icon color="orange" name="bars" circular size="big"></Icon>
        Menu
      </Button>

      <Button aria-controls="simple-menu" onClick={handleLogout}>
        <Icon color="orange" name="sign-out" circular size="big"></Icon>
        LOGOUT
      </Button>

      <Menu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={showDashboard}>Dashboard</MenuItem>
        <MenuItem onClick={showUserMgmt}>User Management</MenuItem>
      </Menu>
    </div>
  );
};

export default AdminMenu;
