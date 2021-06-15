import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  button: {
    color: "white",
    fontSize: "15px",
    fontWeight: "bold",
  },
  title: {
    flexGrow: 1,
  },
}));
export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <Typography variant="h6" className={classes.title}>
            MTD BANK
          </Typography>
          <Button className={classes.button}>ABOUT US</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
