import React, { useEffect, useState } from 'react';
import CatagoriesNab from './CatagoriesNab';
import { CgLaptop } from 'react-icons/cg';
import toast from 'react-hot-toast';
import ProductCard from './ProductCard';
import CardSlider from './CardSlider';

const Products = () => {
    const [product, setproduct]= useState([]);
    const [loading, setloading] = useState(true);
    const [selectCategory, setselectCategory] = useState("All")
    const [showAll, setShowAll] = useState(false);
    
    
    
    useEffect(()=>{
      fetch('/Data.json')
      .then((res)=> res.json())
      .then((data)=> setproduct(data), toast.success('Successfully !'))
      .catch((error)=>{
        console.log(error);
        toast.error("Failed To Products Data!!")
      })
      .finally(()=> setloading(false))
    },[])
    
    const catagories = ["All", ...new Set(product.map(data=> data.category))]
    const filterProducts = selectCategory ==="All" ? product :product.filter(p => p.category === selectCategory);
    const visibleProduct = showAll ? filterProducts : filterProducts.slice(0,8);
    const rattings = product.filter(data=>
      data.rating > 7
    )
    return (
    <div className='w-11/12 mx-auto py-15'>
      <h1 className='text-lg lg:text-xl'>RECOMMENDED FOR YOU</h1>
      <CatagoriesNab catagories={catagories}
      selectCategory={selectCategory}
      setselectCategory={setselectCategory}
      ></CatagoriesNab>
      {
        loading ?
        (<div className='flex justify-center items-center h-60'>
          <span className="loading loading-dots loading-lg text-yellow-500"></span>
          <span className="loading loading-dots loading-xl text-yellow-500"></span>
        </div>)
        : filterProducts.length > 0 ?
        (
          <>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {
            visibleProduct.map(product => (
              <ProductCard
              key={product.id}
              product = {product}
              ></ProductCard>
            ))
          }
          </div>

          {
            filterProducts.length > 8 && (
              <div className='flex justify-center mt-7'>
                <button
                className='px-5 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-300 transition-all duration-300'
                onClick={() => setShowAll(!showAll)}
                >{showAll ? "Show Less" : "Show More"}</button>
              </div>
            )
          }
          </>
        ) : (
          <p className='text-gray-400 text-center'>No Products Found</p>
        )
      }
      <CardSlider moviecard={rattings}></CardSlider>
    </div>
  )
}

export default Products
