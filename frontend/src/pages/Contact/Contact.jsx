import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div>
       <div className='contact-page'>
            <div className="container">
                    <div className="content">
                    <div className="left-side">
                        <div className="address details">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="topic">Address</div>
                        <div className="text-one">john umunna</div>
                        <div className="text-two">lagos Nigeria</div>
                        </div>
                        <div className="phone details">
                        <i className="fas fa-phone-alt"></i>
                        <div className="topic">Phone</div>
                        <div className="text-one">+0098 9893 5647</div>
        
                        </div>
                        <div className="email details">
                        <i className="fas fa-envelope"></i>
                        <div className="topic">Email</div>
                        <div className="text-one">ezekenny91@gmail.com</div>
                        
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="topic-text">Send us a message</div>
                        <p>If you have any work for me , you can send me message from here. It's my pleasure to work with you.</p>
                    <form action="#">
                        <div className="input-box">
                        <input type="text" placeholder="Enter your name" />
                        </div>
                        <div className="input-box">
                        <input type="text" placeholder="Enter your email" />
                        </div>
                        <div className="input-box message-box">
                            <textarea></textarea>
                        </div>
                        <div className="button">
                        <input type="button" value="Send Now" />
                        </div>
                    </form>
                    </div>
                    </div>
            </div>
      </div>
    </div>
  )
}

export default Contact
