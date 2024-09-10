import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import "./ProductCard.css"

const ProductCard = () => {
  return (
    <div>
        <div className="container-fluid p-0">
            <div className="product-card position-relative rounded-2">
                <div className="wishlist-icon position-absolute">
                   <Link>
                       <i class="fa fa-heart-o text-dark fs-5" aria-hidden="true" alt="wishlist"></i>                          
                    </Link>
                </div>
                <div className="product-image">
                    <img src="images/watch.png" className='img-fluid p-0' alt="" />
                </div>
                <div className="product-details p-2">
                    <h6 className='brand text-fluid text-danger'>IOS</h6>
                    <h6 className='product-title text-fluid'>
                         iphone 13 pro, 300gb rom, 45gb ram, strong screen,
                    </h6>
                    <ReactStars  count={5}  size={15} value={3} edit={false} activeColor="#ffd700"/>
                     <div className="d-flex justify-content-between">
                     <p className="price">$100</p>
                     <p className='btn btn-outline-danger custom-btn rounded-5'>Add to cart</p>
                     </div>
                     
                </div>
                <div className="action-bar position-absolute">
                     <div className="d-flex flex-column">
    
                        <Link>
                          <i class="fa fa-arrows-alt text-dark " aria-hidden="true" alt="compare"></i>                          
                        </Link>
                        <Link>
                          <i class="fa fa-eye text-dark" aria-hidden="true" alt="view"></i>                          
                        </Link>

                     </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default ProductCard
