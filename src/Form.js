import React from 'react'
import "./Form.css";

function a(){
    var x=document.getElementById("a").value;
    var y=document.getElementById("b").value;
    var z=/^[2][1][A][8][1][A][6][1][0-9][0-9]+$/;
    var u=/^[a-zA-Z0-9@.!@#$%^&*;:/]+$/;
    if(z.test(x) && u.test(y))
     document.getElementById("c").innerHTML="Sucessfully Logined";
    else
     document.getElementById("c").innerHTML="Invalid Username (or) Password";
}
function Form(){
  return (
    <div className="ll">
    <div className="a">
      <center><h2>SIGN UP PAGE</h2></center>
      <label className="b"><i>Username:</i></label>
      <input className="box" id="a" type="text" placeholder="Enter Username"/>
      <label className="b"><i>E-Mail:</i></label>
      <input className="box" id="b" type="email" placeholder="Enter E-mail"/>
      <label className="b"><i>Password:</i></label>
      <input className="box" id="c" type="password" placeholder="Enter Password"/>
      <label className="b"><i>Confirm Password:</i></label>
      <input className="box" id="d" type="password" placeholder="Enter Password Again"/>
      <p></p>
      <button className="box" type="submit"><i className="A" onClick={a}>Login</i></button>
      <p id="c" className="B"></p>
    </div>
    </div>
  )
}
export default Form;