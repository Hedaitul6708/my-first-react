import React from 'react'

const Navbar1 = () => {
  const link = (
    <>
      <li>Home</li>
      <li>Pages</li>
      <li>Shop</li>
      <li>Blog</li>
      <li>Contact Us</li>
    </>
  )

 return (
    <>
      <div className="navbar shadow-md bg-black/50 backdrop:backdrop-blur-md fixed text-white top-0 left-0 right-0 z-100">
        <div className='w-11/12 mx-auto flex justify-between items-center'>
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-black/50 backdrop:backdrop-blur-md rounded-box z-1 mt-3 w-52 p-2 shadow">
                {link}
              </ul>
            </div>
            <div className='flex items-center gap-10'>
              <a className="btn btn-ghost text-xl">Karto</a>

              <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-5">
                  {link}
                </ul>
              </div>
            </div>
          </div>

          <div className="navbar-end flex gap-5">
            <label className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-2 border border-transparent focus-within: border-yellow-400 transition duration-300">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="Search"
                className='bg-transparent outline-none text-sm text-white placeholder-white/50 w-24 md:w-40'

              />
            </label>


            <div className="avatar">
              <div className="ring-[#facc15] ring-offset-black/40 rounded-full ring-2 ring-offset-2">
                <img className='w-9' src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar1
