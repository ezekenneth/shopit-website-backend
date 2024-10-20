import React from 'react'
import "./login.css"
import {Link} from "react-router-dom"

const login = () => {
  return (
    <div> 
        <div className='login-container d-flex justify-content-center align-items-center vh-70'>
            <div className="row">
              <div className="col-12">
                <div className="login-card">
                  <h3>Login</h3>

                  <form action="" className='login-form d-flex flex-column gap-3'>
                    
                    <div >
                      <input 
                        type="email" 
                        className="input-form" 
                        name='email' 
                        placeholder='email'
                      />
                    </div>

                    <div>
                      <input 
                        type="password" 
                        className="input-form" 
                        name='password' 
                        placeholder='password' 
                      />
                    </div>
                    <div>
                      <Link to='/forgot-password'>Forgot Password</Link>

                      <div className='d-flex justify-content-center align-items-center gap-4'>
                         <button className='login-btn'>Login</button>
                         <Link className= 'signup-btn'>Signup</Link>

                      </div>
                    </div>
              
                  </form>
                </div>
              </div>
            </div>

        </div>
    </div>
  )
}

export default login
