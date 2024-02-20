
import React from "react";
import "./loginpage.scss";

function Loginpage() {
  return (
    <>
      <p className="title">Login </p>

      <form className="inputs">
        <label>
          Username:
          <input type="text" name="id" placeholder="Id" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" placeholder="Password" required />
        </label>
        <input type="submit" style={{ backgroundColor: "#a1eafb" }} />
      </form>
    </>
  );
}

export default Loginpage;
