import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../app/Slices/CartSlice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Cards({product, index}) {
  const loggedin = useSelector(state => state.loggedin)
  const cart = useSelector(state=> state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  function removeCart(){
    dispatch( removeFromCart(product.id) );
    toast.error("Removed Item");
  }

  function addCart(){
    if(loggedin){
      dispatch( addToCart(product) );
      toast.success("Added to Cart");
    }
    else{
      navigate("/login");
      toast.error("Please Login");
    }
    
  }

  return (
    <div className='w-[30%] min-w-56 min-h-80 border border-gray-400 rounded-lg hover:shadow-md px-3 py-2 flex flex-col gap-2 justify-center items-center text-center '>
      <h3 className='font-semibold'>{`${product.title.substring(0,11)}`}</h3>
      <p className='text-gray-500 text-xs'>{`${product.description.substring(0,45)}..`}</p>
      <img src={product.image} className='w-8/12 h-3/5 '/>
      <div className='w-full flex justify-between items-center mt-1'>
        <p className='text-blue-500'>{`₹${product.price}`}</p>
        { cart.some(p => p.id == index)?
          (<button className='px-2 py-1 border bg-red-400 text-white rounded-md'
          onClick={removeCart}>Remove</button>):
          (<button className='px-5 py-1 border bg-green-400 text-white rounded-md'
          onClick={addCart}>Add</button>)
        }
      </div>
    </div>
  )
}

export default Cards;