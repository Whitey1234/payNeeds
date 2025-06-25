import React, { use,  } from 'react';
import { Link, Links, NavLink } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';
import '../component/navbar.css'



const Navbar = ({money}) => {
  
    const{user,logout}=use(AuthContext)

    const handleLogout =()=>{
        logout()
        .then((result)=>{
            alert(" Are you sure to Logout ! ")
            console.log (result)
        })
        .catch((err)=>{
            const errorMessage =err.massage
            alert( errorMessage)
        })
    }

   

    const links = <>
    
    <NavLink to={'/'}> <li className='font-bold'>  Home </li></NavLink> 
   <NavLink to={"/bills"}><li className='font-bold'>Bills </li></NavLink>
   <NavLink to={'/profile'}> <li className='font-bold'>  Profile </li></NavLink>
    
    </>
    
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       
        <li>
         
          <ul className="p-2 flex gap-4">
            {links}
          </ul>
        </li>
       
      </ul>
    </div>
    <img className='w-32 h-20' src ="https://i.ibb.co.com/sdVccPFs/e787a46f-02db-48b5-85bb-d0c027eb1fd3.jpg" alt="" />
    <a className="btn btn-ghost text-xl font-bold hidden lg:block">
  <span className="text-red-500">Pay</span>
  <span className="text-blue-500">Needs</span>
</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     
      
      
         
          <ul className="p-2 flex gap-4 ">
           {links}
          </ul>
       
      
     
    </ul>
  </div>
  <div>

  </div>
  {
  user ? (
    <div className="navbar-end"> <button className='btn mr-10'> Blance :{money} taka</button> <Link to={'/login'}> <button onClick={handleLogout} className="btn bg-blue-500 text-white">Log Out </button></Link> </div>
  ) : (
    <div className="navbar-end">
      <Link to="/login" className="btn bg-blue-500 text-white">Login</Link>
      <Link to="/register" className="btn mx-4 bg-red-500 text-white">Register</Link>
    </div>
  )
}
  
</div>
    )
}

export default Navbar;