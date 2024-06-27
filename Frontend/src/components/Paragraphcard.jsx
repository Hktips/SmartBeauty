import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Paragraphcard() {
   
  return (
    <>
  <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className=" w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello,Welcome to our hair salon{" "}
              <span className="text-pink-500">Smart Beauty!!!</span>
            </h1>
            <p className=" mb-3 text-gray-500 dark:text-gray-400">
            Where we offer an array of top-tier services to cater to your every hair need. Our expert stylists specialize in precision cuts that reflect your unique style, from classic bobs to trendy pixie cuts. Transform your look with our professional coloring services, providing rich, vibrant shades, or add dimension with balayage and foil highlights. For those desiring longer, fuller hair, we offer seamless extensions in various styles. Complete your experience with our luxurious wash and set service, ensuring your hair is clean, styled, and ready for any occasion. Visit us today for a personalized hair care experience like no other.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn mt-6 btn-secondary">Get Started</button>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
           <img 
            src="../../public/n1.jpeg"
            className="md:w-[550px] md:h-[460px] md:ml-12 animate-border inline-block rounded-md bg-white bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] p-1"
            alt=""
          />
      </div>
      </div>
     
    </>
  );
}

export default Paragraphcard;
