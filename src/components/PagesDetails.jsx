import React from "react";
import BG from "../assets/10001.jpg";
import BGh from "../assets/10002.jpg";
import BGs from "../assets/10003.jpg";

export default function PagesDetails() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      
      
      <img src={BG} alt="" className="w-full rounded-xl mb-6" />

      
      <p className="text-white/60 mb-3">
        Admin • February 22, 2025
      </p>

      
      <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
        Here’s the first Valentino’s new Makeup Collection
      </h1>

      
      <p className="text-white/50 leading-relaxed mb-6">
        One of the challenges that often surfaces when working with a remote sales team is a lack of 
        transparency over <br /> what is happening, and where in the process things are taking place.We’re going to peel back the curtain and <br /> show you how to create the best sales.
      </p>

      
      <h2 className="text-2xl font-semibold mb-4 leading-snug p-10 bg-[#bd844c] rounded-2xl text-center">
        There is a way out of every box, a solution to every <br /> puzzle — it’s just a matter of finding it.
      </h2>

      
      <p className="text-white/50 leading-relaxed mb-8">
        Lorem ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes 
        lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque euro, pretium quis, 
        sem. Nulla consequat massa quis enim.
      </p>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <img src={BGh} alt="" className="rounded-xl w-full" />
        <img src={BGs} alt="" className="rounded-xl w-full" />
      </div>

      <p className=" text-white/50 mt-10">Cursus libero viverra tempus netus diam vestibulum lorem tincidunt congue porta. Non ligu egestas commodo <br /> massa. Lorem non sit vivamus convallis elit mollis. Viverra sodales feugiat natoque sem morbi hac nunc ultricies <br /> nibh netus facilisis blandit. Felis purus et iaculis. Semper orci duis montes curabitur potenti a varius quis augue <br /> duis Non ligula sodales natoque.</p>

    </div>
  );
}