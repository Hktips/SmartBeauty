import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Usercard() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 p-8 ">
        <div className="m-10 p-10">
           
    <Slider {...settings}>
    {/* card 1 */}
    <div className="card bg-base-100 w-80 shadow-xl bg-gradient-to-r from-blue-200 to-cyan-200 border-8 border-white ">
  <figure className="px-10 pt-10">
    <img
      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXoClfpa9xUvFHO_CgOnxqo1XFz37XxdT1i7SYWw39toLsIHIhnVPiMip5PYU5mw6ZnyYIF2bs8GC8GXZr6y-t_GsP7rX22T2NDmrJFd2SI7VTE5hoFvruBaNqbVFwjw9i1MRvWsXIvDAmRkXbC-kMjGhyphenhyphenr24AjLQKPiiZCRWpCF4eYiuXOmFLBnMdnuE/s16000/neeleshpic.png"
      alt="Shoes"
      className="rounded-full border-2 border-white" />
  </figure>
  <div className="card-body items-center text-center bg-gradient-to-r from-teal-400 to-yellow-200">
    <h2 className="card-title">Neelesh Sen</h2>
    <p>Cutting Master<br/>Experience- 3year</p>
    <div className="card-actions">
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>
{/* card 2 */}
<div className="card bg-base-100 w-80 shadow-xl bg-gradient-to-r from-blue-200 to-cyan-200 border-8 border-white">
  <figure className="px-10 pt-10">
    <img
      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXoClfpa9xUvFHO_CgOnxqo1XFz37XxdT1i7SYWw39toLsIHIhnVPiMip5PYU5mw6ZnyYIF2bs8GC8GXZr6y-t_GsP7rX22T2NDmrJFd2SI7VTE5hoFvruBaNqbVFwjw9i1MRvWsXIvDAmRkXbC-kMjGhyphenhyphenr24AjLQKPiiZCRWpCF4eYiuXOmFLBnMdnuE/s16000/neeleshpic.png"
      alt="Shoes"
      className="rounded-full border-2 border-fuchsia-600" />
  </figure>
  <div className="card-body items-center text-center bg-gradient-to-r from-teal-400 to-yellow-200 ">
    <h2 className="card-title">Pawan Sen</h2>
    <p>Cutting Master<br/>Experience- 3year</p>
    <div className="card-actions">
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>
{/* card 3 */}
<div className="card bg-base-100 w-80 shadow-xl bg-gradient-to-r from-blue-200 to-cyan-200 border-8 border-white">
  <figure className="px-10 pt-10">
    <img
      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXoClfpa9xUvFHO_CgOnxqo1XFz37XxdT1i7SYWw39toLsIHIhnVPiMip5PYU5mw6ZnyYIF2bs8GC8GXZr6y-t_GsP7rX22T2NDmrJFd2SI7VTE5hoFvruBaNqbVFwjw9i1MRvWsXIvDAmRkXbC-kMjGhyphenhyphenr24AjLQKPiiZCRWpCF4eYiuXOmFLBnMdnuE/s16000/neeleshpic.png"
      alt="Shoes"
      className="rounded-full border-2 border-fuchsia-600" />
  </figure>
  <div className="card-body items-center text-center bg-gradient-to-r from-teal-400 to-yellow-200">
    <h2 className="card-title">Neelesh Sen!</h2>
    <p>Cutting Master<br/>Experience- 3year</p>
    <div className="card-actions">
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>
    
   
</Slider>
</div>
</div>
     
    </>
  );
}

export default Usercard;
