import React from "react";

export default function ContactDetails() {
    return (
        <div className="px-4 sm:px-6 lg:px-16 py-10">
            
            {/* Contact Form */}
            <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-md text-black">
                <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">
                    Contact Us
                </h2>

                <form className="space-y-5 text-black">

                    {/* Name */}
                    <div>
                        <label className="block mb-1 text-gray-700 font-medium">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl 
                                       focus:ring-2 focus:ring-indigo-400 outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-1 text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl 
                                       focus:ring-2 focus:ring-indigo-400 outline-none"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block mb-1 text-gray-700 font-medium">Phone</label>
                        <input
                            type="text"
                            placeholder="+8801XXXXXXXXX"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl 
                                       focus:ring-2 focus:ring-indigo-400 outline-none"
                        />
                    </div>

                    {/* Textarea */}
                    <div>
                        <label className="block mb-1 text-gray-700 font-medium">Message</label>
                        <textarea
                            rows="5"
                            placeholder="Write your message..."
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl 
                                       focus:ring-2 focus:ring-indigo-400 outline-none"
                        ></textarea>
                    </div>

                    {/* Submit Button full width */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white p-3 rounded-xl 
                                   hover:bg-indigo-700 transition shadow-md"
                    >
                        Send Message
                    </button>

                    {/* Small submit (centered) */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-24 bg-gradient-to-r from-indigo-600 to-purple-600 
                                       text-white p-3 rounded-xl font-semibold 
                                       hover:opacity-90 transition shadow-lg"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            {/* Google Map */}
            <div className="mt-10 rounded-xl overflow-hidden border">
                <iframe
                    title="map"
                    src="https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-64 sm:h-72 md:h-96"
                    loading="lazy"
                ></iframe>
            </div>

        </div>
    );
}
