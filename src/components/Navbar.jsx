import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoCart } from "react-icons/io5";
import logo from "../assets/png-transparent-retail-computer-icons-e-commerce-sales-mega-offer-miscellaneous-service-logo.png"
import { useDispatch, useSelector } from 'react-redux';
import { toggel } from '../app/Slices/LoggedSlice';
import toast from 'react-hot-toast';
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {

    const loggedin = useSelector((state)=>state.loggedin);
    const cart = useSelector((state)=> state.cart)
    const dispatch =useDispatch();
    const navigate = useNavigate();
    const [open, setOpen]=useState(false);

    function logginHandler(){
        if(loggedin){
            dispatch(toggel());
            toast.error("logged out");
            navigate("/");
        }
        else{
            navigate("/login")
        }
    }

  return (
    <div className='w-full flex justify-center bg-[#0F4C75] text-white'>

        <div className='flex md:w-8/12 w-9/12 justify-between py-3'>

            <NavLink to="/">
                <div className='flex items-center gap-2'>

                    <img src={logo} className='w-8 h-8 rounded-full object-cover'/>
                    <span className='text-red-500 font-bold text-xl'>Store</span>

                </div>
            </NavLink>

            
            
            <div className={`md:flex md:flex-row md:w-fit md:h-fit h-full w-full flex-col md:static
             md:z-auto fixed bg-[#0F4C75] md:bg-opacity-100 bg-opacity-50 
             ${open ? "top-0 left-[50%] right-[50%] z-30" : "-right-10 hidden"} 
            md:gap-5 md:text-lg md:text-white text-red-500 text-2xl font-semibold items-center transition-all duration-1000 ease-in-out`}>

                <NavLink to="/">
                    <p className='md:m-0 md:mt-0 mt-20 m-3'>Home</p>
                </NavLink>

                { loggedin &&
                    <NavLink to="/cart">
                        <div className='md:m-0 m-3 w-fit relative'>
                            <IoCart/>
                            <div className={` w-3 h-3 rounded-full text-[0.500rem] bg-green-500 
                            absolute flex justify-center items-center -top-1 -right-1 animate-bounce
                             ${cart.length == 0 ? "opacity-0" : "opacity-100"}`}>{cart.length}</div>
                        </div>
                    </NavLink>
                    
                }

                {
                    loggedin ? 
                    (<button className='md:m-0 m-3 px-4 py-1 border border-gray-500 rounded-lg text-center'
                    onClick={logginHandler}
                    >Logout</button>):
                    (<button className='md:m-0 m-3 px-4 py-1  border border-gray-500 rounded-lg text-center'
                    onClick={logginHandler}
                    >Login</button>)
                }

            </div>

            <div className='md:hidden flex items-center static right-10 top-5 z-50'>
                {open ? 
                    (<button onClick={()=>setOpen(!open)} className='fixed'><IoCloseSharp/></button>):
                    (<button onClick={()=>setOpen(!open)}><TiThMenu/></button>)}
            </div>

        </div>

    </div>
  )
}

export default Navbar