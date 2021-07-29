import React from "react";
import { useStateValue } from "../StateProvider";

//React <Router>
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AccountBalanceWallet from "@material-ui/icons/AccountBalanceWallet";
import AccountBalance from "@material-ui/icons/AccountBalance";
import AttachMoney from "@material-ui/icons/AttachMoney";
import DateRange from "@material-ui/icons/DateRange";
import Update from "@material-ui/icons/Update";
import Accessibility from "@material-ui/icons/Accessibility";

// Card Components
import CardBody from "../components/Card/CardBody.js";
import GridItem from "../components/Grid/GridItem.js";
import GridContainer from "../components/Grid/GridContainer.js";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardIcon from "../components/Card/CardIcon.js";
import CardFooter from "../components/Card/CardFooter.js";

// importing lodash
import _ from "lodash";

//Global styles
import styles from "../styles/dashboardStyle.js";
import { Container } from "react-bootstrap";

const useStyles = makeStyles(styles);

const User = () => {
  const classes = useStyles();
  const [{ userInfo }] = useStateValue();
  const history = useHistory();

  const transactions = userInfo.user.transactions;

  console.log(userInfo);
  let totalDeposits = 0;
  let totalWithdraw = 0;
  let depositArray = [];
  let withdrawArray = [];

  let totalRecipients = 0;
  if (userInfo?.user?.recipients?.length > 0) {
    totalRecipients = userInfo.user.recipients.length;
  }

  const uniqDates = _.uniq(_.map(transactions, "date")).sort();

  uniqDates.forEach((date) => {
    const deposits = transactions.filter((tran) => {
      return tran.type === "DEPOSIT" && tran.date === date;
    });

    const withdraws = transactions.filter((tran) => {
      return tran.type === "WITHDRAW" && tran.date === date;
    });
    console.log(withdraws);

    depositArray = deposits.map((item) => item.amount);
    withdrawArray = withdraws.map((item) => item.amount);
    totalDeposits = depositArray.reduce((init, sum) => init + sum, 0);
    totalWithdraw = withdrawArray.reduce((init, sum) => init + sum, 0);
    // console.log(totalDeposits);
    console.log(totalWithdraw);
  });

  // function calculate(type) {
  //   return userInfo.user.transactions
  //     .filter((t) => t.type === type)
  //     .map((t) => t.amount)
  //     .reduce((acc, d) => acc + d, 0);
  // }

  return (
    <div>
      {!userInfo && history.push("./login")}
      {userInfo && userInfo.user && (
        <Container>
          <GridContainer>
            <GridItem xs={12} sm={12} md={3}>
              <Card>
                <CardHeader color="warning" stats icon>
                  <CardIcon color="warning">
                    <AccountBalance />
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
            <GridItem xs={12} sm={12} md={3}>
              <Card>
                <CardHeader color="success" stats icon>
                  <CardIcon color="success">
                    <AttachMoney />
                  </CardIcon>
                  <p className={classes.cardCategory}>Deposits</p>
                  <h3 className={classes.cardTitle}>${totalDeposits}</h3>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <DateRange />
                    Last 1 Week
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Card>
                <CardHeader color="danger" stats icon>
                  <CardIcon color="danger">
                    <AccountBalanceWallet />
                  </CardIcon>
                  <p className={classes.cardCategory}>Withdraw</p>
                  <h3 className={classes.cardTitle}>${totalWithdraw}</h3>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <DateRange />
                    Last 1 Week
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Card>
                <CardHeader color="info" stats icon>
                  <CardIcon color="info">
                    <Accessibility />
                  </CardIcon>
                  <p className={classes.cardCategory}>Recipients</p>
                  <h3 className={classes.cardTitle}>{totalRecipients}</h3>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <Update />
                    Latest
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </Container>
      )}
    </div>
  );
};

export default User;
