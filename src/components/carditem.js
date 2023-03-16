import React from 'react';
import Image from 'next/image';

 
function CardItem(props) {
  return (
      
        <div className={`${props.color} relative flex items-center justify-center`}>
          <Image src={props.src} alt="Avatar" className="object-contain sm:h-80 md:h-60 w-8/12 h-10/12"/>
          <div className="absolute inset-y-1/3">
            <h2 className='sm:text-black text-center text-3xl font-mono antialiased'>{props.title}</h2>
          <p className="sm:text-black text-center ">{props.text}</p>
          </div>
        </div>

  )
}
export default CardItem;
