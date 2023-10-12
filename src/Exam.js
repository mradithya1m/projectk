import React from 'react';
import "./Exam.css";
function a() {
    var x = document.getElementById("a").value;
    if (x === "2008")
        document.getElementById("c").innerHTML = "The Hunger Games, Suzanne Collins";
    else if (x === "2009")
        document.getElementById("c").innerHTML = "The Help, Kathryn Stockett";
    else if (x === "2010")
        document.getElementById("c").innerHTML = "Educated, Tara Westover";
    else if (x === "2012")
        document.getElementById("c").innerHTML = "Gone Girl, Gillian Flynn";
    else if (x === "2019")
        document.getElementById("c").innerHTML = "The Silent Patient, Alex Michaelides";
    else
        document.getElementById("c").innerHTML = "No books found for the selected year"; 
}
function Exam() {
  return (
    <div className='l'>
        <br /><br />
        <p>Test Case:-1</p>
        <label>Input:</label><br />
        <input className='aa' type='number' id="a"/><br />
        <label>Output:</label><br />
        <p id='c' className='aaa' onClick={a}></p>
        <div>
        <p>Test Case:-2</p>
        <label>Input:</label><br />
        <input className='aa' type='number' id="a"/><br />
        <label>Output:</label><br />
        <p id='c' className='aaa' onClick={a}></p>
        </div>
    </div>
  )
}
export default Exam;