import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import "./Logout.css";

const Logout = () => {
  const history = useHistory();
  const [{ userInfo }, dispatch] = useStateValue();

  const handleYes = () => {
    localStorage.clear("auth");
    dispatch({
      type: "LOGOUT",
      item: null,
    });
    toast.info("Logout performed", {
      position: toast.POSITION.TOP_CENTER,
    });

    history.push("/");
  };

  const handleNo = () => {
    history.goBack();
  };

  return (
    <Container className="d-flex justify-content-center">
      <fieldset className="text-center">
        <h2>Are you really want to logout?</h2>
        <Button
          onClick={handleYes}
          variant="contained"
          color="secondary"
          className="logout__btn"
        >
          YES
        </Button>
        <Button
          onClick={handleNo}
          variant="contained"
          color="primary"
          className="logout__btn"
        >
          NO
        </Button>
      </fieldset>
    </Container>
  );
};

export default Logout;
