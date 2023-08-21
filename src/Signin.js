import React from 'react';
import './Signin.css';

export default function Signin() {
  return (
    <div>
      <div className="container-in">
        <div className='signin'>
            <label id='label' htmlFor="username">Username:
            </label><br/>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/><br/>
            <label id='label' htmlFor="password">Password:
            </label><br/>
            <input type="text" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"/>
            <div className='btn-sign'>
            <button className='btn-in'>LogIn</button>
            </div>
        </div>
      </div>
    </div>
  )
}
