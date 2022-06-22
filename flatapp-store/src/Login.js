import React from "react";
// // import { useState } from "react";

function Login () {
  
    return(
      <div className="login">
      <form>
        <h1>Login</h1>
        <label htmlFor="name">UserName</label>
                <input type="text" id="name" value="" />
                <br></br>
                <br></br>
        <label htmlFor="name">Password</label>        
                <input type="password" id="password" value="password"/>
                <br></br>
                <br></br>
        {/* <label htmlFor="name">Newsletter</label>
                <input type="checkbox" id="newsletter" value="newsletter"/> */}
                <button id="submit" type="submit">Login</button>
          
      </form>
    </div>
  
    )
  }

export default Login;
