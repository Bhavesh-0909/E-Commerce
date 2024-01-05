import React from 'react'
import { useSelector } from 'react-redux';
import CartItems from '../components/CartItems';
import { NavLink } from 'react-router-dom';

function Cart() {

    const cart = useSelector((state)=> state.cart);

  return (
    <div className='w-full min-h-screen h-auto flex flex-wrap justify-center mt-10 mb-5'>
        {cart.length >0?
        (<div className='w-9/12 flex flex-wrap justify-between gap-5'>
            <div className='w-[100%] md:w-[50%] '>
            {cart.map((items) => <CartItems key={items.id} items={items}/>)} 
            </div>
            <div className='min-w-[40%]'>
                <h3 className='text-green-500 text-2xl font-semibold'>your cart</h3>
                <h1 className='text-green-500 text-5xl font-semibold'>Summary</h1>
                <p className='text-gray-600 font-medium mt-5'>Total items : <span className='text-blue-500 '>{cart.length}</span></p>
                <p className='text-gray-600 font-medium'>Total ammount : <span className='text-blue-500 '>{`₹${cart.reduce((acc, cur)=> acc + cur.price, 0)}`}</span></p>
                <button className='w-11/12 py-2 text-xl rounded-lg bg-green-500 mt-10 px-2'>Check Out</button>
            </div>
        </div>):
        (<div className='w-full flex flex-col items-center justify-center gap-5'>
            <h1 className='text-3xl font-semibold text-green-500'>No items in Cart</h1>
            <NavLink to="/E-Commerce">
                <button className='px-10 py-2 bg-green-500 text-white font-semibold rounded-lg'>Start Shopping</button>
            </NavLink>
        </div>)}
        
    </div>
  )
}

export default Cart