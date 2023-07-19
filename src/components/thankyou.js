import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"

const Thankyou = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 5000);
        // eslint-disable-next-line
    }, []);

    return (
        <div className='bg-gradient-to-r from-blue-500 to-fuchsia-500 h-[100vh] py-10'>
            <img className="h-20 mx-auto" src="https://www.codeinbound.com/assets/images/main-logo/logo.png" alt="logo" />
            <h1 className='mt-48 text-center my-12 text-5xl font-bold uppercase text-white '>Thank you for your time</h1>
        </div>
    )
}

export default Thankyou