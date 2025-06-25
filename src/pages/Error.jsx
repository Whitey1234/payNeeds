import React from 'react';
import { Link } from 'react-router';



const Error = () => {
    return (
        
        <div>
             <img src= 'https://i.ibb.co.com/4wQfb07C/404-page.png' alt="" />
             <Link className=' btn btn-primary text-center flex  justify-center' to={"/"} > Back to home</Link>
        </div>
    );
};

export default Error;