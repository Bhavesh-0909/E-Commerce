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
    <div className='w-[30%] h-[350px] border p-2 flex flex-col gap-1 justify-center text-center'>
      <h3>{`${product.title.substring(0,15)}..`}</h3>
      <p>{`${product.description.substring(0,45)}..`}</p>
      <img src={product.image} className='w-11/12 h-3/5 '/>
      <div className='flex justify-between'>
        <p>{`₹${product.price}`}</p>
        { cart.some(p => p.id == index)?
          (<button className='px-2 py-1 border bg-red-400 text-white'
          onClick={removeCart}>Remove</button>):
          (<button className='px-5 py-1 border bg-green-400 text-white'
          onClick={addCart}>Add</button>)
        }
      </div>
    </div>
  )
}

export default Cards;