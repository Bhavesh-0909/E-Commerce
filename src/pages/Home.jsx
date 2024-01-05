import React from 'react';
import Cards from "../components/Cards"

import { products } from '../data';

function Home() {
  return (
    <div className='w-full flex justify-center mt-5 mb-5'>
      <div className='md:w-8/12 w-full flex flex-wrap gap-4 justify-around'>
        {products.map((product)=><Cards key={product.id} product={product} index={product.id}/>)}
      </div>
    </div>
  )
}

export default Home