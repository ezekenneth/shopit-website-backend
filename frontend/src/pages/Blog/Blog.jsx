import React from 'react'
import BlogCard from '../../components/blogCard/blogCard'


const Blog = () => {
  return (
    <div className='m-2 my-3'>

        <div className="">
            <div className="filter-sort-grid col-2">
                <div class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                       Blog Category
                    </a>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
            <div>
              <div className="products_list container-fluid">
              <div className="row">  
                   <div className=" col-lg-3  col-md-4 col-sm-6 col-12 p-1 mt-4">
                      <BlogCard />
                    </div>
                    <div className="col-lg-3  col-md-4 col-sm-6 col-12 p-1 mt-4">
                      <BlogCard />
                    </div>
                    <div className="col-lg-3  col-md-4 col-sm-6 col-12 p-1 mt-4">
                       <BlogCard />
                    </div>
                    <div className="col-lg-3  col-md-4 col-sm-6 col-12 p-1 mt-4 ">
                       <BlogCard />
                    </div>
                    <div className="col-lg-3  col-md-4 col-sm-6 col-12 p-1 mt-4">
                      <BlogCard />
                    </div>
                    <div className="col-lg-3  col-md-4 col-sm-6 col-12 p-1 mt-4">
                      <BlogCard />
                    </div>
                    <div className="col-lg-3  col-md-4 col-sm-6 col-12 p-1 mt-4">
                      <BlogCard />
                    </div>
                
            </div>
              </div>
            </div>
        </div>

      
       
    </div>
  )
}

export default Blog
