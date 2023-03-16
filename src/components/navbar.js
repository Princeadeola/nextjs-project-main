import Image from 'next/image';
import React from 'react';
import Basket from "../asset/basket.png"
import hero from '../asset/hero.jpg';
import Nav from "./responsivenav"

function Navbar() { 
 
  return (   
    <div classname="relative">
      <Nav/>
      <Image src={hero} alt="hero" className='object-cover w-screen h-screen'/>
      
      <div className='flex lg:flex items-center justify-center'>
     
      <nav className='navbar flex justify-evenly lg:px-28 xl:px-28 2xl:px-28 mt-10 absolute bg-transparent top-0 '>
      <ul className='navbar-content flex pl-40 pr-12 sticky items-center sm:flex-col'>
        <li className='px-10 cursor-pointer  font-medium md:hidden sm:hidden'>Products</li>
        <li className='px-10 cursor-pointer  font-medium md:hidden sm:hidden'>Juice Clinic</li>
        <li>
          <h4 className='text-5xl cursor-pointer  font-extrabold'>CPJ</h4>
        </li>
        <li className='px-10 cursor-pointer font-medium md:hidden sm:hidden'>About CPJ</li>
        <li className='px-10 cursor-pointer font-medium md:hidden sm:hidden'>Gallery</li>
        
      </ul>
      <div className='flex sm:flex-col items-center px-4 md:hidden sm:hidden'>
        <button className='px-4 font-bold'>Sign up</button>
      <Image className='w-6 h-6 cursor-pointer' src={Basket} alt="bbasket"></Image>
      </div>
      
    </nav>
    <div className="absolute inset-y-1/2 ">
            <h2 className='text-center text-6xl font-mono antialiased'>Welcome</h2>
          <p className="text-center text-lg">Live Healthy</p>
    </div>
    


    </div>
   
    </div>
 
    
    
  );
}

export default Navbar;
