import React, {Component} from 'react';
import './Login_sm.css';
class LoginSM extends Component {
  render() {
    return (
      <div className='half-width  white-bg'>
        <h4>Login Using social media</h4>
        <a href='https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dgmail%26oq%3Dgmail%26gs_lcrp%3DEgZjaHJvbWUqCwgAEEUYJxg7GIoFMgsIABBFGCcYOxiKBTIJCAEQIxgnGIoFMgkIAhAAGEMYigUyDwgDEAAYFBiHAhixAxiABDIKCAQQABixAxiABDIMCAUQABhDGLEDGIoFMgwIBhAAGEMYsQMYigUyBggHEEUYPdIBCDE3MjBqMGo3qAIAsAIA%26sourceid%3Dchrome%26ie%3DUTF-8&ec=GAlAAQ&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-1039446780%3A1698601235979004&theme=glif'> <button className='btn1'>Google</button> </a>
       <a href='https://www.linkedin.com/home'> <button className='btn2'>Linkedin</button></a>
       <a href='https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjk4NjAxNzEzLCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D'> <button className='btn3'>Facebook</button></a>
      </div>
    );
  }
}

export default LoginSM;
