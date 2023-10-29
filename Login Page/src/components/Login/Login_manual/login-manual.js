import React, {Component} from 'react';
import Login from '../login';

class LoginManual extends Component {
  render() {
    const login= ()=>{
      alert("LOGIN SUCCESFULL");  

    }
    const register= ()=>{
      alert("REGISTRATION SUCCESFULL");  

    }
    return (
      <div className='half-width white-bg'>
        <h4>Login Manually</h4>
        <br/>
        <form action="">
          <div className='form-group'>
            <input type="text" className='form-control' placeholder='Email'/>
          </div>
          <div className='form-group'>
            <input type="password" className='form-control' placeholder='Password'/>
          </div>
           <button onClick={login} type="submit" className='btn btn-primary right-btn'>Log in</button> <span/>
           <button onClick={register} type="submit" className='btn btn-primary right-btn'>Register</button>
        </form>
      </div>
    );
  }
}

export default LoginManual;
