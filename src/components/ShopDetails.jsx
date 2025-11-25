import React from 'react'
import BG from '../assets/10005.jpg'
import bGs from '../assets/10007.jpg'
import bgf from '../assets/10006.jpg'
import bgh from '../assets/10009.jpg'
import bgc from '../assets/10008.jpg'

export default function ShopDetails() {
  return (
    <div className="px-4 sm:px-8 lg:px-16 py-10">


      <div className="flex flex-col lg:flex-row items-center gap-10 justify-center">

        <div className="max-w-xl">
          <h1 className="text-2xl mb-5">Product Descriptions</h1>

          <p className="text-white/50 leading-7">
            Creating handcrafted paintings involves a wide range of techniques, styles, and materials,
            so product details can vary significantly depending on the specific artwork and artist.
            However, here are some common product details that you might find when purchasing or
            describing a handcrafted painting:
            <br /><br />
            When purchasing or selling a handcrafted painting, it's essential to have a clear
            understanding of these product details to make an informed decision and to provide
            potential buyers with a comprehensive description of the artwork. Additionally, the
            value and significance of a handcrafted painting can be influenced by factors like the
            artist's reputation, the rarity of the piece, and the demand for their work in the art market.
          </p>
        </div>
        <img
          src={BG}
          alt=""
          className="w-full max-w-md mt-5 lg:mt-20 rounded-xl"
        />
      </div>

      <p className="text-center text-[#FF6633] mt-10">Next day Products</p>
      <h1 className="text-center text-3xl sm:text-4xl mb-10 mt-3 ">Related Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-5 justify-center">

        <div className="text-center sm:text-left">
          <img src={bGs} alt="" className="w-full rounded-xl mb-7 transition-transform duration-300 hover:scale-110" />
          <p className="text-white/50 text-sm mb-2 ">Physicians</p>
          <h3 className="text-[16px] hover:text-[#ef6cc2]">Powder Creamy Natural</h3>
          <p className="text-[15px] mt-2 flex justify-center sm:justify-start gap-5">$102.00 <s>$226.00</s></p>
        </div>

        <div className="text-center sm:text-left">
          <img src={bgf} alt="" className="w-full rounded-xl mb-7 transition-transform duration-300 hover:scale-110" />
          <p className="text-white/50 text-sm mb-2">Physicians</p>
          <h3 className="text-[16px] hover:text-[#ef6cc2]">Mineral Matte Finishing</h3>
          <p className="text-[15px] mt-2 flex justify-center sm:justify-start gap-5">$30.00 <s>$50.00</s></p>
        </div>

        <div className="text-center sm:text-left">
          <img src={bgh} alt="" className="w-full rounded-xl mb-7 transition-transform duration-300 hover:scale-110" />
          <p className="text-white/50 text-sm mb-2">Physicians</p>
          <h3 className="text-[16px] hover:text-[#ef6cc2]">Resurfacing Exfoliating</h3>
          <p className="text-[15px] mt-2 flex justify-center sm:justify-start gap-5">$90.00 <s>$110.00</s></p>
        </div>

        <div className="text-center sm:text-left">
          <img src={bgc} alt="" className="w-full rounded-xl mb-7 transition-transform duration-300 hover:scale-110" />
          <p className="text-white/50 text-sm mb-2 ">Physicians</p>
          <h3 className="text-[16px] hover:text-[#ef6cc2]">Correction Tinted Cream</h3>
          <p className="text-[15px] mt-2 flex justify-center sm:justify-start gap-5">$44.00 <s>$55.00</s></p>
        </div>

        <div className="">
          <div className="relative overflow-hidden group">

            <img
              src={bgh}
              alt=""
              className="w-full rounded-md"
            />

            <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center py-3 font-semibold opacity-0 group-hover:opacity-100 hover:bg-[#ff6633] transition-all duration-300 rounded-md">
              Add To Cart
            </div>

          </div>

          <p className="text-white/50 text-sm mt-3">Physicians</p>
          <h3 className="text-[16px] hover:text-[#ef6cc2]">Powder Creamy Natural</h3>
          <p className="text-[15px] mt-2 flex gap-5">$102.00 <s>$226.00</s></p>
        </div>
        <div className="">
          <div className="relative overflow-hidden group">

            <img
              src={bgf}
              alt=""
              className="w-full rounded-md"
            />

            <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center py-3 font-semibold opacity-0 group-hover:opacity-100 hover:bg-[#ff6633] transition-all duration-300 rounded-md">
              Add To Cart
            </div>

          </div>

          <p className="text-white/50 text-sm mt-3">Physicians</p>
          <h3 className="text-[16px] hover:text-[#ef6cc2]">Powder Creamy Natural</h3>
          <p className="text-[15px] mt-2 flex gap-5">$102.00 <s>$226.00</s></p>
        </div>
        <div className="">
          <div className="relative overflow-hidden group">

            <img
              src={bgc}
              alt=""
              className="w-full rounded-md"
            />

            <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center py-3 font-semibold opacity-0 group-hover:opacity-100 hover:bg-[#ff6633] transition-all duration-300 rounded-md">
              Add To Cart
            </div>

          </div>

          <p className="text-white/50 text-sm mt-3">Physicians</p>
          <h3 className="text-[16px] hover:text-[#ef6cc2]">Powder Creamy Natural</h3>
          <p className="text-[15px] mt-2 flex gap-5">$102.00 <s>$226.00</s></p>
        </div>
        <div className="">
          <div className="relative overflow-hidden group">

            <img
              src={bGs}
              alt=""
              className="w-full rounded-md"
            />

            <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center py-3 font-semibold opacity-0 group-hover:opacity-100 hover:bg-[#ff6633] transition-all duration-300 rounded-md">
              Add To Cart
            </div>

          </div>

          <p className="text-white/50 text-sm mt-3">Physicians</p>
          <h3 className="text-[16px] hover:text-[#ef6cc2]">Powder Creamy Natural</h3>
          <p className="text-[15px] mt-2 flex gap-5">$102.00 <s>$226.00</s></p>
        </div>

        


      </div>
    </div>
  )
}
