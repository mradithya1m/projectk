import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import React from 'react';
import Menu from './Menu';
import './Myprofile.css';
function a()
{
  var x=document.getElementById("a").innerHTML("MyProfile");
  var y=document.getElementById("a").innerHTML("MyProfile");
  var z=document.getElementById("a").innerHTML("MyProfile");

}
function Myprofile() {
  return (
<div className='c'>
       <div className='d'>
       <div>
        <a href='Menu.js' className='f'><MenuSharpIcon fontSize='large' className='e' onclick={a}/>
        <select id="c">
            <option></option>
            <option>MyProfile</option>
            <option>Dash Board</option>
            <option>Menu</option>
          </select>
          </a>
        </div>
        <div className='l'>
       <p>Contact</p>
       <p>Sign In</p>
       <p>Login</p>
       <AccountCircleSharpIcon fontSize='large' className='e1'/>
       </div>
       
        </div>
       <div className='b'>
        <div className='a a1'>
        
        </div>
              
        <div className='a a2'>
         
        </div>

        <div className='a a3'>
         
        </div>
    </div>
</div>
  )
}

export default Myprofile;