import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <div>
        <header className="header-top-strip py-3">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                      <p className='text-white mb-0'>
                        Explore your favourite goods
                      </p>
                    </div>
                    <div className="col-6">
                      <p className='text-end text-white mb-0'>
                        Hotline: <a className='text-white' href="tel: +2349035779656">+2349035779656</a>
                      </p>

                    </div>
                </div>
            </div>
        </header>
        <header className="header-upper py-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-2 pt-2">
                <h2>
                  <Link className='text-white site-logo'>SHOPIT</Link>
                </h2>
              </div>
              <div className="col-5 col2">
              <div className="input-group mx-1 pt-2 ">
                <input type="text" className="form-control .custom-small-input" placeholder="search here..." aria-label="search here..." aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2">
                  <i className="fa fa-search " aria-hidden="true"></i>
                </span>
              </div>
              </div>
              <div className="col-5 custom-col">
                <div className='header-upper-links d-flex'>
                  <div className='wish-compare'>
                    <Link className="d-flex align-items-center" to="/wishlist">
                      <i className="fa fa-heart-o" aria-hidden="true"></i>
                      <p className='link-title'>
                        favourite<br/>wishlist
                      </p>
                    </Link>
                  </div>
                  <div className='wish-compare'>
                    <Link className="d-flex align-items-center">
                      <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                      <p className='link-title'>
                        compare
                      </p>
                    </Link>
                  </div>
                  <div>
                    <Link className="d-flex align-items-center ">
                      <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                      <div className='d-flex flex-column link-title'>
                         <span className='badge bg-white text-dark custom-small-badge '>0</span>
                         <p>$ 500</p>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link className="d-flex align-items-center">
                      <i className="fa fa-user-o" aria-hidden="true"></i>
                      <p className='link-title'>
                        login <br/> my account
                      </p>
                    </Link>
                  </div>
                  <div className='sidebar-list'>
                    <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                      <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>

                    <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                      <div className="offcanvas-header sidebar-header-color d-flex justify-content-between">
                        <h5 className="offcanvas-title text-white" id="staticBackdropLabel">SHOPIT</h5>
                        <i className="fa fa-times text-color" aria-hidden="true" data-bs-dismiss="offcanvas" aria-label="Close"></i>
                      </div>
                      <div className="offcanvas-body sidebar-color ps-4">
                        <div>
                          <ul className="sidebar-items list-unstyled">
                            <li className='pt-2'>
                              <NavLink className= "text-white items"> Home</NavLink>
                            </li>
                            <li className='pt-2'>
                              <NavLink to="/store" className= "text-white items"> Store</NavLink>
                            </li>
                            <li className='pt-2'>
                              <NavLink className= "text-white items"> Category</NavLink>
                            </li>
                            <li className='pt-2'>
                              <NavLink className= "text-white items"> Brands</NavLink>
                            </li>
                            <li className='pt-2'>
                              <NavLink className= "text-white items"> contacts</NavLink>
                            </li>
                            <li className='pt-2'>
                              <NavLink className= "text-white items"> Blogs</NavLink>
                            </li>
                            
        
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <header className='py-3 header-bottom'>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className='menu-bottom d-flex align-items-center gap-15'>
                   <div>
                      <div className="dropdown">
                        <a className="btn btn-secondary dropdown-toggle bg-transparent border-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Category
                        </a>

                        <ul className="dropdown-menu">
                          <li><Link className="dropdown-item" to="">phone</Link></li>
                          <li><Link className="dropdown-item" to="">laptop</Link></li>
                          <li><Link className="dropdown-item" to="">tv</Link></li>
                        </ul>
                     </div>
                   </div>
                   <div className='menu-links'>
                     <div className="d-flex align-items-center gap-15 menu-items">
                       <NavLink className= "text-white items" to="/" > Home</NavLink>
                       <NavLink className= "text-white items" to="/store"> Store</NavLink>
                       <NavLink className= "text-white items" to="/contact">contacts</NavLink>
                       <NavLink className= "text-white items" to="/blogs" >blogs</NavLink>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>

        </header>
        <header className='py-4 px-5 header-bottom2'>
          <div className="input-group mx-1 pt-2 ">
            <input type="text" className="form-control .custom-small-input" placeholder="search here..." aria-label="search here..." aria-describedby="basic-addon2" />
            <span className="input-group-text " id="basic-addon2">
              <i className="fa fa-search " aria-hidden="true"></i>
            </span>
          </div>
        </header>
    </div>
  )
}

export default Header
