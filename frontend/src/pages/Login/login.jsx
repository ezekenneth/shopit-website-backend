import React from 'react'
import "./login.css"
import {Link} from "react-router-dom"

const login = () => {
  return (
    <div> 
        <div className='login-container d-flex justify-content-center align-items-center vh-100'>
            <div className="row">
              <div className="col-12">

                <div className='d-flex align-items-center justify-content-center pb-4'>
                  <h3 className='bg-black p-2 text-white rounded-2'>SHOPIT</h3>
                </div>
                <div className="login-card d-flex flex-column justify-content-center align-items-center ">
                  <h3 className='mb-4'>Welcome Back</h3>

                  <form action="" className='login-form d-flex flex-column gap-3'>
                    
                    <div >
                      <input 
                        type="email" 
                        className="login-input" 
                        name='email' 
                        placeholder='email'
                      />
                    </div>

                    <div>
                      <input 
                        type="password" 
                        className="login-input" 
                        name='password' 
                        placeholder='password' 
                      />

                      <div>
                       <Link to='/forgot-password' className='text-link-color mt-2'>Forgot Password</Link>
                      </div>
                    </div>
                    <div>
                      

                      <div className='d-flex justify-content-center align-items-center gap-5'>
                         <button className='login-btn'>Login</button>
                      </div>
                        <p className='mt-2 d-flex justify-content-center align-items-center'>
                          Don't have an account? 
                          <Link className= 'signup-link text-link-color ps-1'>Signup Now</Link>
                        </p>                   

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
