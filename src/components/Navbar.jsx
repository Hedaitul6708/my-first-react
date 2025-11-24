import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../UserContext";

const Navbar = () => {
  const { user, logout } = useContext(userContext);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const toggleMenu = () => setOpen(!open);

  const Links = (
    <>
      <li><Link className="hover:text-orange-400" to="/">Home</Link></li>
      <li><Link className="hover:text-orange-400" to="/about">About</Link></li>
      <li><Link className="hover:text-orange-400" to="/pages">Pages</Link></li>
      <li><Link className="hover:text-orange-400" to="/shop">Shop</Link></li>
      <li><Link className="hover:text-orange-400" to="/contact">Contact Us</Link></li>
    </>
  );

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    navigate(`/products?search=${searchTerm}`);
  };

  return (
    <>
      <div className="navbar shadow-md bg-black/70 backdrop-blur-md fixed text-white top-0 left-0 right-0 z-50">
        <div className="w-11/12 mx-auto flex justify-between items-center">

          
          <div className="navbar-start">
            <a className="btn btn-ghost text-xl">Karto</a>
          </div>

          
          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-6">{Links}</ul>
          </div>

          
          <div className="navbar-end flex items-center gap-5">

            
            <form
              onSubmit={handleSearch}
              className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-2 border border-transparent focus-within:border-yellow-400 transition duration-300"
            >
              <svg className="h-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="m21 21-4.3-4.3" stroke="currentColor" strokeWidth="2" />
              </svg>

              <input
                type="search"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent outline-none text-sm text-white placeholder-white/50 w-24 md:w-40"
              />
            </form>

           
            <div className="relative">
              <div className="avatar cursor-pointer" onClick={toggleMenu}>
                <div className="ring-[#facc15] ring-offset-black/40 rounded-full ring-2 ring-offset-2">
                  <img
                    className="w-9"
                    src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                    alt="avatar"
                  />
                </div>
              </div>

              
              <div
                className={`absolute right-0 mt-2 w-44 bg-black/80 backdrop-blur-md 
                rounded-xl shadow-lg border border-white/10 p-4 transition-all duration-300
                ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}`}
              >
                {user ? (
                  <>
                    <p className="text-sm text-white/60">Logged in as</p>
                    <p className="text-sm font-semibold mb-3">{user.email}</p>

                    <button
                      onClick={() => { logout(); setOpen(false); }}
                      className="w-full bg-red-500 hover:bg-red-600 text-white py-1 rounded-lg"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="w-full block bg-yellow-400 hover:bg-yellow-500 text-black text-center py-1 rounded-lg"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
