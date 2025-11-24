import React from 'react'
import BG from "../assets/10004.jpg"

export default function AboutDetails() {
  return (
    <div>
      <div className='flex p-3 items-center justify-center'>
        <div className=''>
          <div className='mb-10 mt-15'>
            <h3 className='text-xl'>Our Journey</h3>
            <h1 className='text-4xl mb-5 mt-3'>Your world at a glance</h1>
            <p className='text-white/50 mr-5'>Founded in a quaint but vibrant corner of the <br /> city, Oliva Beauty began as a small dream with a <br /> big vision. Our founder, a passionate advocate for natural <br /> and effective skincare, also to feel <br /> confident in their skin.</p>
          </div>
          <div>
            <h1 className='text-4xl mb-5'>Our Mission</h1>
            <p className='text-white/50'>Founded in a quaint but vibrant corner of the <br /> city, Oliva Beauty began as a small dream with a <br /> big vision. Our founder, a passionate advocate <br /> for natural and effective skincare, also to feel <br /> confident in their skin.</p>
          </div>
        </div>
        <div>
          <img src={BG} alt="" className=' mt-10' />
        </div>
        <div className='ml-10 mt-13'>
          <h2 className='font-bold mb-4'>About Company</h2>
          <p className='text-white/50'>With a slim design, a vibrant entertainment <br /> system, and outstanding performance, the new <br /> Galaxy Tab A7 is a stylish new companion for <br /> your life.Dive head-first into the things you love,<br /> and easily share your favorite moments. Learn, <br /> explore, connect and be inspired.</p>
        </div>

      </div>
    </div>
  )
}
