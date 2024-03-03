import React from 'react'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function () {

    const location = useLocation()
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Navigate one step back in history
    };


    console.log('location.pathname', location.pathname)
    return (
        <>
            {location.pathname !== "/" ? <div className='h-[50px] w-[50px] rounded-full shadow-md flex justify-center items-center absolute top-[50px] cursor-pointer duration-150 hover:bg-blue-600 group'
                onClick={handleBack}
            >
                <IoArrowBackCircleOutline className='w-[20px] h-[20px] group-hover:text-white' />
            </div> : ""}
        </>

    )
}
