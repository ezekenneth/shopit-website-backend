import React from 'react'
import { Link } from 'react-router-dom'
import "./signup.css"

const signup = () => {
  return (
    <div>
       <div className="container d-flex align-items-center justify-content-center vh-100">
        
            
            <div className="signup-container">
                     <div className='d-flex align-items-center justify-content-center'>
                        <h3 className='bg-black p-2 text-white rounded-2'>SHOPIT</h3>
                      </div>
                      <div className='d-flex align-items-center justify-content-center'>
                        <h3>Create Account</h3>
                      </div>

                    <form action="" className='form d-flex flex-column gap-3'>
                         <div className='d-flex flex-column'>
                            <label htmlFor="name">Name</label>
                            <input 
                             type="text" 
                             name="name" 
                             id="name"
                             placeholder='Fullname' 
                             className='signup-input'
                            />
                         </div>
                         <div className='d-flex flex-column'>
                            <label htmlFor="email">Email</label>
                            <input 
                             type="email" 
                             name="email" 
                             id="email"
                             placeholder='Enter your Email'
                             className='signup-input'
                            />
                         </div>
                         <div className='d-flex flex-column'>
                            <label htmlFor="password">Password</label>
                            <input 
                             type="password" 
                             name="Password" 
                             id="Password"
                             placeholder='Atleast 6 characters'
                             className='signup-input'
                            />
                         </div>
                         <div className='d-flex flex-column'>
                            <label htmlFor="confirmpassword">Confirm Password</label>
                            <input 
                             type="password" 
                             name="confirmPassword" 
                             id="confirmPassword" 
                             className='signup-input'
                            />
                         </div>

                         <button className='signup-btn'>Submit</button>

                         <p className='mt-2 d-flex justify-content-center align-items-center'>
                             Already have an account? 
                          <Link className= ' text-link-color ps-1'>Sigin Now</Link>
                        </p>            

                    </form>
            </div>
            
        </div>
      
    </div>
  )
}

export default signup
