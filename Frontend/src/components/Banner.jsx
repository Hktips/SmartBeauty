import React from "react";
function Banner() {
  return (
    <>
         <div className=" max-w-screen-2xl container mx-auto md:px-0 px-4 flex flex-col md:flex-row my-16">

<div className="carousel w-full">
<div id="slide1" className="carousel-item relative w-full">
<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNUYTjyGMtfgyi8QqXA6rUBlH52aVpK5I29-f2a01SOa4UYbwTgDqnXhmzRTPQ8qs9Ze39SwXJz3LX2knnOr-cKnQN8eXdgR7LlLYAloVUx0TLT1On_LpTb16BZqV_pLACvFZVKv3YLflBkY62ZAKNftxxlG09pPf0bESC_EFUAoTFTFYRiD6uxPtI9Zo/s1200/slider1.jpg" className="w-full" />
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
<a href="#slide4" className="btn btn-circle">❮</a> 
<a href="#slide2" className="btn btn-circle">❯</a>
</div>
</div> 
<div id="slide2" className="carousel-item relative w-full">
<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiW_rtqlQWnu_iA93F5ledbcHl6cj6NrRUm3ZH6Qh4yTaoT0dOTm0K0neEyZit9Fm3WuLEhsCcjHUCxp6DLWfQfV7pdDiQzQW2-HTcEJxZHOacy2zBoqoXn9-e9jYWG6Setn4Aqm0CrV0I9twZL1MN3zoIp90i9yeF-_56VaSlBjggJY12RPaw2mnqjSzw/s16000/slider3.jpg" className="w-full" />
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
<a href="#slide1" className="btn btn-circle">❮</a> 
<a href="#slide3" className="btn btn-circle">❯</a>
</div>
</div> 
<div id="slide3" className="carousel-item relative w-full">
<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_PqXMjlEMtIoN6KeBIBeNZdprHxhKsQVNyhzcuuhyvI6GxsEGGIIzzOs6iTivOOMDe9lAX2FvkRJmQ_IJ9e3FaFqAO4PPaRpfP3tkauPBHBK9abTYm8GzY9i9oFqCKo3RdS-uPp59FLlwbI4mLU3LYhuGicY-OgdTX8JNZ_LGvyeOzn6YfcOIhyphenhyphenAAtfk/s16000/slider2.jpg" className="w-full" />
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
<a href="#slide2" className="btn btn-circle">❮</a> 
<a href="#slide4" className="btn btn-circle">❯</a>
</div>
</div> 
<div id="slide4" className="carousel-item relative w-full">
<img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
<a href="#slide3" className="btn btn-circle">❮</a> 
<a href="#slide1" className="btn btn-circle">❯</a>
</div>
</div>
</div>
</div>
    </>
  );
}

export default Banner;
