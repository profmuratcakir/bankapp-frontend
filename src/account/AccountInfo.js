import React from "react";
import { useStateValue } from "../StateProvider";

import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AccountBalanceWallet from "@material-ui/icons/AccountBalanceWallet";
import AccountBalance from "@material-ui/icons/AccountBalance";
import Update from "@material-ui/icons/Update";

// Card Components

import GridItem from "../components/Grid/GridItem.js";
import GridContainer from "../components/Grid/GridContainer.js";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardIcon from "../components/Card/CardIcon.js";
import CardFooter from "../components/Card/CardFooter.js";

//Global styles
import styles from "../styles/dashboardStyle.js";

const useStyles = makeStyles(styles);

const AccountInfo = () => {
  const classes = useStyles();
  const [{ userInfo }] = useStateValue();

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <AccountBalance />
              </CardIcon>
              <p className={classes.cardCategory}>Account Number</p>
              <h3 className={classes.cardTitle}>
                {userInfo.user.accountNumber}
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <p>Account Number</p>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <AccountBalanceWallet />
              </CardIcon>
              <p className={classes.cardCategory}>Balance</p>
              <h3 className={classes.cardTitle}>
                ${userInfo.user.accountBalance}
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default AccountInfo;
