import React from "react";
import { Outlet } from 'react-router-dom'

const User = () => {


  return (
    <div className="my-3">
      <div className="w-100 my-3 text-center">
        <h3>Users</h3>
        <p>User list of this room</p>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default User;
