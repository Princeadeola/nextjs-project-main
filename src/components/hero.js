import Image from 'next/image'
import React from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import heroimage from "../asset/hero.jpg"



const hero = () => {
  return (
    <section className="min-h-screen">
      <div className="container ">
      <Image width="300" height="300" src={heroimage} alt="your-image-description" className="w-full h-full" />
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-10"></div>
      </div>
    </section>
  )
}

export default hero

