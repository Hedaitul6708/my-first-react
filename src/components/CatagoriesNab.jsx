import React from 'react'
import Products from './Products'

 const CatagoriesNab = ({catagories, selectCategory,setselectCategory}) => {
    
  return (
    <div className='flex flex-wrap justify-start gap3 md:gap-5 py-8 sm:gap-3'>
      {
        catagories.map(uniq=> ( <button
        key={uniq}
            onClick={()=> setselectCategory(uniq)}
            className= {`px-4 py-2 rounded-full font-medium transition-all duration-300
              
              ${selectCategory === uniq ? "bg-yellow-500 text-black" : "border border-y-amber-500  text-gray-300 hover:bg-amber-500 hover:text-black"


              }`}
              
              
              
              
              >{uniq}</button>))
      }
    </div>
  )
}
export default CatagoriesNab