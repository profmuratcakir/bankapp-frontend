import React, { useState, useEffect } from "react";
import bankService from "../service/BankService";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";
import UserDetails from "./UserDetails";

const UserMgmt = () => {
  const [{ userInfo }] = useStateValue();
  const history = useHistory();
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    bankService
      .getAllUsers()
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((e) => console.log(e));
    return () => {
      setUsers([]);
    };
  }, []);
  return (
    <div>
      {!userInfo && history.push("./login")}
      {userInfo && userInfo.user && userInfo.user.isAdmin && (
        <UserDetails users={users} />
      )}
    </div>
  );
};

export default UserMgmt;
