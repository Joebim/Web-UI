import React from 'react'

export default function Home() {
  return (
    <>
    <div className="contain h-[100vh] w-full bg-gray-100 flex justify-center items-center flex-col py-[50px]">
        <div className="title-contain">
            <h3 className='p-[30px] text-[25px]'>UI Store</h3>
        </div>
        <div className="card-contain flex-col md:w-[65%] lg:flex-row h-full lg:h-[400px] flex justify-between items-center ">
            <div className="card-one h-[300px] w-[240px] mb-[50px] rounded-[20px] bg-white"></div>
            <div className="card-two h-[300px] w-[240px] mb-[50px] rounded-[20px] bg-white"></div>
            <div className="card-three h-[300px] w-[240px] mb-[50px] rounded-[20px] bg-white"></div>
        </div>
    </div>
    </>
  )
}
