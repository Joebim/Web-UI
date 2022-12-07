import React from 'react'

export default function Home() {
  return (
    <>
    <div className="contain h-[100vh] w-full bg-gray-100 flex justify-center items-center flex-col">
        <div className="title-contain">
            <h3 className='p-[30px] text-[25px]'>UI Store</h3>
        </div>
        <div className="card-contain w-[80%] h-[400px] flex justify-between items-center">
            <div className="card-one h-[300px] w-[250px] rounded-[20px] bg-white"></div>
            <div className="card-two h-[300px] w-[250px] rounded-[20px] bg-white"></div>
            <div className="card-three h-[300px] w-[250px] rounded-[20px] bg-white"></div>
        </div>
    </div>
    </>
  )
}
