import React from 'react';
import Hero from '../Components/home/hero';
import Information from '../Components/home/information';
import ProductCategories from '../Components/home/productCategories';
import RecentProduct from '../Components/home/recentProduct';
import SaleProducts from '../Components/home/saleProducts';
import Topbrands from '../Components/home/topbrands';

function Home() {
  return (
    <div className='container'>
      <Hero/>
      <RecentProduct/>
      <Information/>
      <ProductCategories/>
      <SaleProducts/>
      <Topbrands/>
    </div>
  )
}

export default Home