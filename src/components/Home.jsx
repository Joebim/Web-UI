import React from 'react'
import { Link } from 'react-router-dom'
import blogpost from "./../assets/images/blogpost.jpg"
import ads from "./../assets/images/ads.jpg"
import login from "./../assets/images/login.jpg"

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center gap-7">
        <h1 className='text-[30px] font-extrabold'>Web Store</h1>
        <div className="container gap-4 flex-col justify-center  sm:flex-row sm:items-center ">
          <Link to="/ads">
            <div className="card">
              <div className="face face1">
                <div className="content flex flex-col h-full w-full">
                  <div className="flex-[2] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${ads})` }}></div>
                  <div className="flex-[1]"><h3 className="">Ads Manager</h3></div>


                </div>
              </div>
              <div className="face face2">
                <div className="content  flex flex-col">
                  <p>Promote your products and reach new customers with our easy-to-use ad manager.</p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog">
            <div className="card">
              <div className="face face1">
                <div className="content flex flex-col h-full w-full">
                  <div className="flex-[2] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${blogpost})` }}></div>
                  <div className="flex-[1]"><h3 className="">Blog Post</h3></div>


                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Discover helpful tips and industry insights on our informative blog.</p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/login">
            <div className="card">
              <div className="face face1">
                <div className="content flex flex-col h-full w-full">
                  <div className="flex-[2] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${login})` }}></div>
                  <div className="flex-[1]"><h3 className="">Login UI</h3></div>


                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Securely access your store account to manage products, orders, and more.</p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>

    </>
  )
}
