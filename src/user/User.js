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

// Plotly.js for charts
import PlotlyCharts from "../charts/PlotlyCharts";

//Global styles
import styles from "../styles/dashboardStyle.js";
import { Container } from "react-bootstrap";

const useStyles = makeStyles(styles);

const User = () => {
  const classes = useStyles();
  const [{ userInfo }] = useStateValue();
  const history = useHistory();

  let totalDeposits = 0;
  let totalWithdraws = 0;
  let depositArray = [];
  let withdrawArray = [];
  let transferArray = [];

  let transactions = [];
  if (userInfo?.user?.transactions) {
    transactions = userInfo.user.transactions;
  }

  // Getting Unique transaction date
  const dates = transactions.map((tran) => tran.date);
  const uniqDates = [...new Set(dates)];

  //For the cards
  let totalRecipients = 0;
  if (userInfo?.user?.recipients?.length > 0) {
    totalRecipients = userInfo.user.recipients.length;
  }

  // Extracting Deposit, Withdraw and calculating sum of them
  uniqDates.forEach((date) => {
    //Deposit calculation
    const deposits = transactions.filter((tran) => {
      return tran.type === "DEPOSIT" && tran.date === date;
    });

    const depositAmounts = deposits.map((item) => item.amount);
    const depositSum = depositAmounts.reduce((init, sum) => init + sum, 0);
    depositArray.push(depositSum);

    //Withdraw calculation
    const withdraws = transactions.filter((tran) => {
      return tran.type === "WITHDRAW" && tran.date === date;
    });

    const withdrawAmount = withdraws.map((item) => item.amount);
    const withdrawSum = withdrawAmount.reduce((init, sum) => init + sum, 0);
    withdrawArray.push(withdrawSum);

    //Transfer calculation
    const tranfers = transactions.filter((tran) => {
      return tran.type === "TRANSFER" && tran.date === date;
    });

    const transferAmount = tranfers.map((item) => item.amount);
    const transferSum = transferAmount.reduce((init, sum) => init + sum, 0);
    transferArray.push(transferSum);
  });

  totalDeposits = depositArray.reduce((init, sum) => init + sum, 0);
  totalWithdraws = withdrawArray.reduce((init, sum) => init + sum, 0);

  const depositData = [
    {
      type: "bar",
      x: uniqDates,
      y: depositArray,
    },
  ];

  const withdrawData = [
    {
      type: "scatter",
      x: uniqDates,
      y: withdrawArray,
    },
  ];

  const transferData = [
    {
      type: "scatter",
      x: uniqDates,
      y: transferArray,
    },
  ];

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
                  <h3 className={classes.cardTitle}>${totalWithdraws}</h3>
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

          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card chart>
                <CardHeader color="success">
                  <h4>Deposits</h4>
                </CardHeader>
                <CardBody>
                  <PlotlyCharts data={depositData} />
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card chart>
                <CardHeader color="warning">
                  <h4>Withdraws</h4>
                </CardHeader>
                <CardBody>
                  <PlotlyCharts data={withdrawData} />
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={4}>
              <Card chart>
                <CardHeader color="info">
                  <h4>Transfer</h4>
                </CardHeader>
                <CardBody>
                  <PlotlyCharts data={transferData} />
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </Container>
      )}
    </div>
  );
};

export default User;
