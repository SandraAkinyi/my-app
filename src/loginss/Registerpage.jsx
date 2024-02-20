// Inside src/RegisterPage.js

import React from "react";
import "./registerpage.scss";

function Registerpage() {
  return (
    <>
      <p className="title">Registration Form</p>

      <form className="inputs">
        <label>
          Username:
          <input type="text" name="username" placeholder="Username" required />
        </label>
        <label>
          Id:
          <input type="text" name="id" placeholder="Id" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" placeholder="Password" required />
        </label>
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
        </label>
        <input type="submit" style={{ backgroundColor: "#a1eafb" }} />
      </form>
    </>
  );
}

export default Registerpage;
