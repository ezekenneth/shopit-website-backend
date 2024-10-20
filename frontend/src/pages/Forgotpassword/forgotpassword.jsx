import React from 'react'
import {Link} from "react-router-dom"
import "./forgotpassword"

const forgotpassword = () => {
  return (
    <div>

      <div> 
          <div className='login-container d-flex justify-content-center align-items-center vh-70'>
              <div className="row">
                <div className="col-12">
                  <div className="login-card d-flex flex-column justify-content-center align-items-center ">
                    <h3 className='mb-4'>Welcome Back</h3>

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
                        

                        <div className='d-flex justify-content-center align-items-center gap-5'>
                          <button className='login-btn'>Send Email</button>
                        </div>
                          <p className='mt-2 d-flex justify-content-center align-items-center'>
                            Don't have an account? 
                            <Link className= 'signup-btn text-link-color ps-1'>Signup Now</Link>
                          </p>                   

                      </div>
                
                    </form>
                  </div>
                </div>
              </div>

          </div>
      </div>
      
    </div>
  )
}

export default forgotpassword
