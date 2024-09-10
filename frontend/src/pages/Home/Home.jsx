import React from 'react'
import {Link} from "react-router-dom"
import "./Home.css"
import ProductCard from '../../components/productCard/ProductCard'

const Home = () => {
  return (
    <div>
      <section className="home-wrapper m-1">
          <div className="container-fluid">
              <div className="row">
                <div className="col-6 p-0  border border-white ">
                  <div className="main-banner position-relative">
                    <img src="/images/laptop.jpg" className='img-fluid' alt="main-banner" />
                    <div className="main-banner-content text-fluid position-absolute ">
                       <h3 className='text-fluid1'>
                          Apple 2024 MacBook
                        </h3>
                       <h4 className='text-fluid1'>30% 0FF</h4>
                       <Link><button className='btn btn-danger custom-btn1 rounded-5'>Buy Now</button></Link>
                    </div>
                  </div>
                </div>
                <div className="col-6 ">
                    <div className="row">
                        <div className="col-6 p-0 border border-white">  
                            <div className="small-banner1-color position-relative">
                                <img src="/images/watch.png" className='img-fluid rounded-3' alt="main-banner" />
                                <div className="small-banner-content position-absolute ">
                                    <h4 className='small-text-fluid'>
                                        Apple 2024 Watch
                                    </h4>
                                    <h5 className='small-text-fluid'>40% 0FF</h5>
                                    <Link>
                                        <button className='btn text-danger small-custom-btn rounded-5 ps-0'>
                                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                            BEST SALE
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 p-0 border border-white">  
                            <div className=" small-banner2-color position-relative">
                                <img src="/images/watch.png" className='img-fluid rounded-3' alt="main-banner" />
                                <div className="small-banner-content position-absolute ">
                                    <h4 className='small-text-fluid'>
                                        Apple 2024 Watch
                                    </h4>
                                    <h5 className='small-text-fluid'>40% 0FF</h5>
                                    <Link>
                                        <button className='btn text-danger small-custom-btn rounded-5 ps-0'>
                                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                            BEST SALE
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 p-0 border border-white">  
                            <div className=" small-banner3-color position-relative">
                                <img src="/images/watch.png" className='img-fluid rounded-3' alt="main-banner" />
                                <div className="small-banner-content position-absolute ">
                                    <h4 className='small-text-fluid'>
                                        Apple 2024 Watch
                                    </h4>
                                    <h5 className='small-text-fluid'>40% 0FF</h5>
                                    <Link>
                                        <button className='btn text-danger small-custom-btn rounded-5 ps-0'>
                                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                            BEST SALE
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 p-0 border border-white">  
                            <div className=" small-banner4-color position-relative">
                                <img src="/images/watch.png" className='img-fluid rounded-3' alt="main-banner" />
                                <div className="small-banner-content position-absolute ">
                                    <h4 className='small-text-fluid'>
                                        Apple 2024 Watch
                                    </h4>
                                    <h5 className='small-text-fluid'>40% 0FF</h5>
                                    <Link>
                                        <button className='btn text-danger small-custom-btn rounded-5 ps-0'>
                                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                            BEST SALE
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
            
                </div>
              </div>
          </div>
      </section>
      <section className='home-wrapper2 m-1'>
        <div className="category-title ms-3">
            <h4>Category</h4>
        </div>
        <div class="horizontal-scroll">
            <div class="scroll-container">
                <div class="btn rounded-5 item active">All</div>
                <div class="btn rounded-5 item">phone</div>
                <div class="btn rounded-5 item">bag</div>
                <div class="btn rounded-5 item">car</div>
                <div class="btn rounded-5 item">food</div>
                <div class="btn rounded-5 item">house</div>
                <div class="btn rounded-5 item">shoe</div>
                <div class="btn rounded-5 item">cloth</div>
                <div class="btn rounded-5 item">drinks</div>
                <div class="btn rounded-5 item">shawama</div>
            </div>
        </div>
      
      </section>
      <section className='product-wrapper'>
        <div className="container-fluid">
           <div className="row">
                <div className="col-12">
                     <h3>Products</h3>
                </div>
                   <div className="col-lg-2  col-md-3 col-sm-4 col-6 p-1">
                      <ProductCard />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-1">
                      <ProductCard />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-1 ">
                      <ProductCard />
                    </div>
                    <div className="col-lg-2  col-md-3 col-sm-4 col-6 p-1 ">
                      <ProductCard />
                    </div>
                    <div className="col-lg-2  col-md-3 col-sm-4 col-6 p-1">
                      <ProductCard />
                    </div>
                    <div className="col-lg-2  col-md-3 col-sm-4 col-6 p-1">
                      <ProductCard />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-1">
                      <ProductCard />
                    </div>
                
            </div>
        </div>

      </section>
    </div>
  )
}

export default Home
