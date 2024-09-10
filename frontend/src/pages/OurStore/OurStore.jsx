import React, { useState } from 'react'
import "./OurStore.css"
import ProductCard from "../../components/productCard/ProductCard"

const OurStore = () => {
  return (
   <div className='store-container'>
      <div className='store-wrapper'>
        <div className='container-fluid'>
          <div className="row">
            <div className="col-3">
              <div className='container-fluid filter-card m-2'>
                <h3 className="filter-title">Category</h3>
                <div>
                  <ul>
                    <li>Watch </li>
                    <li>laptop</li>
                    <li>tv</li>
                    <li>camera</li>
                  </ul>
                </div>
              </div>
              <div className='container-fluid filter-card m-2'>
                <h3 className="filter-title">Fillter By</h3>
                <div >
                  <h5 className="sub-title">Availability</h5>
                  <div >
                    <div className="form-check d-flex">
                      <input type="checkbox"
                      className="form-check-input" 
                      value=""
                      id='' />
                      <label className="form-check-label" for="">
                        In Stock(20)
                      </label>
                    </div>                   
                    <div className="form-check d-flex">
                      <input type="checkbox"
                      className="form-check-input" 
                      value=""
                      id=''
                      checked
                      />
                      <label className="form-check-label" for="">
                        Out of Stock(0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title mt-4">Price Range</h5>        
                  <div>
                    <div class="input-group mb-3 pe-3">
                      <input type="text" class="form-control p-1" placeholder="min" aria-label="Username"/>
                      <span class="input-group-text p-1">-</span>
                      <input type="text" class="form-control p-1" placeholder="max" aria-label="Server"/>
                    </div>
                  </div>
                  <h5 className="sub-title mt-4">Colors</h5>
                  <div>
                    
                      <ul className='colors ps-0'>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                     
                  </div>
                  <h5 className="sub-title mt-4">size</h5>
                  <div>

                    <div className="form-check d-flex">
                        <input type="checkbox"
                        className="form-check-input" 
                        value=""
                        id='' />
                        <span className="form-check-label">
                          S(7)
                        </span>
                    </div>  
                    <div className="form-check d-flex">
                        <input type="checkbox"
                        className="form-check-input" 
                        value=""
                        id='' />
                        <span className="form-check-label">
                          m(4)
                        </span>
                    </div>    
                  </div>  

                </div>
              </div>
              <div className='container-fluid filter-card m-2 py-2'>
                <h3 className="filter-title">Product tags</h3>

                <div >

                  <div className="product-tags d-flex flex-wrap align-items-center gap-3">
                    <span className=" bg-light text-secondary rounded-3 py-1 px-1 fw-bold fs-7">
                       laptop
                    </span>
                    <span className=" bg-light text-secondary rounded-3 py-1 px-3 fw-bold fs-7">
                       Hand bags
                    </span>
                    <span className=" bg-light text-secondary rounded-3 py-1 px-3 fw-bold fs-7">
                       cap
                    </span>
                    <p className=" bg-light text-secondary rounded-3 py-1 px-1 fw-bold fs-7">
                       bluetooth speaker
                    </p>
                    <span className=" bg-light text-secondary rounded-3 py-1 px-1 fw-bold fs-7">
                       iphone
                    </span>
                    <span className=" bg-light text-secondary rounded-3 py-1 px-1 fw-bold fs-7">
                       desktop
                    </span>
                    <span className=" bg-light text-secondary rounded-3 py-1 px-1 fw-bold fs-7">
                       table
                    </span>
                    <span className=" bg-light text-secondary rounded-3 py-1 px-1 fw-bold fs-7">
                       car
                    </span>
                  </div>

                </div>
              </div>
            </div>
          <div className="col-9">
            <div className="filter-sort-grid">
              <div className="d-flex justify-content-between align-items-center ">
                <div className="d-flex align-items-center">
                  <p className='mb-0 d-flex'>Sort <span className='mx-1'>By</span></p>
                  <select name="" id="" className='form-control form-select'>
                        <option value="manual"> All</option> 
                        <option value="best-selling" selected> 
                          Best Selling
                        </option> 
                        <option value="Ascending-order"> 
                        Ascending order
                        </option> 
                        <option value="best-selling"> 
                          Disending
                        </option> 
                        <option value="Price-high"> 
                          Price . low to high
                        </option> 
                        <option value="Price-low"> 
                          Price . high to low
                        </option> 
                        <option value="Date-newest"> 
                          Date . newest
                        </option> 
                        <option value="Date-oldest"> 
                          Date . from
                        </option> 
                        
                        
                  </select>
                </div>
                <div className='d-flex align-items-center'>
                  <p className="mb-0 totalproducts">21 products</p>
                </div>
              </div>
            </div>
            <div>
              <div className="products_list m-3">
              <div className="row">  
                   <div className="col-lg-3  col-md-4 col-sm-6 col-6 p-1">
                      <ProductCard />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 p-1">
                      <ProductCard />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 p-1 ">
                      <ProductCard />
                    </div>
                    <div className="col-lg-3  col-md-4 col-sm-6 col-6 p-1 ">
                      <ProductCard />
                    </div>
                    <div className="col-lg-3  col-md-4 col-sm-6 col-6 p-1">
                      <ProductCard />
                    </div>
                    <div className="col-lg-3  col-md-4 col-sm-6 col-6 p-1">
                      <ProductCard />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 p-1">
                      <ProductCard />
                    </div>
                
            </div>
              </div>
            </div>
          </div>
          </div>
        </div>        
      </div>
   </div>
  )
}

export default OurStore
