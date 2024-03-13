 import  { useState }  from 'react';
 import './Loginsignup.css'
import User from "../Assets/User.jpg"
import Email from "../Assets/Email.png"
import Password from "../Assets/Password.png"

const Loginsignup=()=>{
    const[action,setAction]=useState("Sign Up");
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
        
          <div className='inputs'>
            {action==="Login"?<div></div>: <div className='input'>
                <img src={User} alt=''height={20}width={20}/>
                <input type='text' placeholder='Name'/>
            </div>}
           
            <div className='input'>
                <img src={Email} alt=''height={20}width={20}/>
                <input type='email' placeholder='Email ID'/>
            </div>
            <div className='input'>
                <img src={Password} alt=''height={20}width={20}/>
                <input type='password' placeholder='Password'/>
            </div>
          </div>
          {action==="Sign Up"?<div></div>:<div className='forgotPassword'>Lost Password?<span>Click here</span></div>}
          
          <div className='submit-container'>
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction('Sign Up')}}>Sign-Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction('Login')}}>Login</div>

          </div>
        </div>
      );
    
} 


export default Loginsignup;
