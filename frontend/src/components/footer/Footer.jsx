import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <footer className=" py-4 footer-bottom">
        <div className='container-fluid'>
          <div className='row'>
            <div className="col-12">
              <p className='text-center text-white mb-0'>&copy; {new Date().getFullYear()}: powered by KenTech</p>
            </div>

          </div>

        </div>
      </footer>
    </div>
  )
}

export default Footer
