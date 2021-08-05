import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";

import { Container } from "react-bootstrap";
import DeleteIcon from "@material-ui/icons/Delete";
import bankService from "../service/BankService";
import { toast } from "react-toastify";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
let rows = [];
const columns = [
  { id: 1, label: "First Name", winWidth: 200 },
  { id: 2, label: "Last Name", winWidth: 200 },
  { id: 3, label: "Email", winWidth: 200 },
  { id: 4, label: "Delete", winWidth: 200 },
];

const UserDetails = (props) => {
  rows = props.users;
  const history = useHistory();
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteStyle = { cursor: "pointer", color: "red" };
  const handleDelete = (userId) => {
    bankService.deleteUser(userId).then((res) => {
      if (res.status === 200) {
        toast.success("User Successfuly deleted", {
          position: toast.POSITION.TOP_CENTER,
        });
        history.push("./admin");
      } else {
        toast.error("User could not be deleted", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    });
  };

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column) => {
                const { id, label, winWidth } = column;
                return (
                  <TableCell
                    key={id}
                    style={{ winWidth: winWidth }}
                    align="center"
                  >
                    {label}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow hover key={row.userId}>
                  <TableCell align="center">{row.firstName}</TableCell>
                  <TableCell align="center">{row.lastName}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">
                    <DeleteIcon
                      style={deleteStyle}
                      onClick={() => handleDelete(row.userId)}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Container>
  );
};

export default UserDetails;
