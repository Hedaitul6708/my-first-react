import React, { useContext, useState } from 'react'
import { userContext } from '../UserContext'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const Login = () => {
    const {login} = useContext(userContext);
    const naviget = useNavigate();

    const [input, setInput] = useState({email : "",password: ""});
    const [error, setError] = useState("");

    const handelSubmit = (e)=>{
        e.preventDefault();

        const res = login(input.email, input.password);

        if(res.success){
            Swal.fire({
                title: "Login Successful!",
                icon: "Success",
                draggable: true
            });
            naviget("/")
        }else{
            setError(res.message);
            toast.error(res.message);
        }
    }
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-10 text-black rounded-2xl shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                    <form onSubmit={handelSubmit} className="space-y-5">


                        <div>
                            <label className="block mb-1 text-gray-700 font-medium">Email</label>
                            <input
                                type="email"
                                placeholder="example@gmail.com"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
                                value={input.email}
                                onChange={e=> setInput({...input,email: e.target.value})}
                                required
                            />
                        </div>


                        <div>
                            <label className="block mb-1 text-gray-700 font-medium">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
                                value={input.password}
                                onChange={e=> setInput({...input, password: e.target.value})}
                                required
                            />
                        </div>


                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-indigo-600 text-white py-3 px-6 rounded-xl hover:bg-indigo-700 transition shadow-md font-semibold"
                            >
                                Login
                            </button>
                        </div>

                    </form>


                    <div className="text-sm text-gray-500 text-center mt-4">
                        Don't have an account? <a href="/signup" className="text-indigo-600 hover:underline">Sign up</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
