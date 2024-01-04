import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoCart } from "react-icons/io5";
import logo from "../assets/png-transparent-retail-computer-icons-e-commerce-sales-mega-offer-miscellaneous-service-logo.png"
import { useDispatch, useSelector } from 'react-redux';
import { toggel } from '../app/Slices/LoggedSlice';
import toast from 'react-hot-toast';

function Navbar() {

    const loggedin = useSelector((state)=>state.loggedin);
    const dispatch =useDispatch();
    const navigate = useNavigate()

    function logginHandler(){
        if(loggedin){
            dispatch(toggel());
            toast.error("logged out");
        }
        else{
            navigate("/login")
        }
    }

  return (
    <div className='w-full flex justify-center bg-[#0F4C75] text-white'>

        <div className='flex w-8/12 justify-between py-3'>

            <NavLink to="/">
                <div className='flex items-center gap-2'>

                    <img src={logo} className='w-8 h-8 rounded-full object-cover'/>
                    <span className='text-red-500 font-bold text-xl'>Store</span>

                </div>
            </NavLink>

            
            
            <div className='flex gap-5 items-center'>

                <NavLink to="/">
                    <p>Home</p>
                </NavLink>

                { loggedin &&
                    <div>
                        <IoCart/>
                    </div>
                }

                {
                    loggedin ? 
                    (<button className='px-4 py-1 border border-gray-500 rounded-lg text-center'
                    onClick={logginHandler}
                    >Logout</button>):
                    (<button className='px-4 py-1 border border-gray-500 rounded-lg text-center'
                    onClick={logginHandler}
                    >Login</button>)
                }

            </div>

        </div>

    </div>
  )
}

export default Navbar