import React from 'react'
import { useSelector } from 'react-redux';
import CartItems from '../components/CartItems';
import { NavLink } from 'react-router-dom';

function Cart() {

    const cart = useSelector((state)=> state.cart);

  return (
    <div className='w-full flex flex-wrap justify-center mt-10 mb-5'>
        {cart.length >0?
        (<div className='w-9/12 flex flex-wrap justify-between gap-10'>
            <div className='w-[45%]'>
            {cart.map((items) => <CartItems key={items.id} items={items}/>)} 
            </div>
            <div className='w-[45%]'>
                <h3 className='text-green-500 text-2xl font-semibold'>your cart</h3>
                <h1 className='text-green-500 text-5xl font-semibold'>Summary</h1>
                <p className='text-gray-600 font-medium mt-5'>Total items : <span className='text-blue-500 '>{cart.length}</span></p>
                <p className='text-gray-600 font-medium'>Total ammount : <span className='text-blue-500 '>{`₹${cart.reduce((acc, cur)=> acc + cur.price, 0)}`}</span></p>
                <button className='w-11/12 py-2 text-xl rounded-lg bg-green-500 mt-10 px-2'>Check Out</button>
            </div>
        </div>):
        (<div>
            <h1>No items in Cart</h1>
            <NavLink to="/">
                <button>Start Shopping</button>
            </NavLink>
        </div>)}
        
    </div>
  )
}

export default Cart