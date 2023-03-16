import Image from 'next/image'
import React from 'react'
import Beet from "../asset/beet.png"

const section = () => {
  return (
    <div className=' hero-container bg-pink-400'>
         <div className="flex sm:flex-col h-full">
      <div className="lg:w-1/2 xl:w-1/2  2xl:w-1/2  flex items-center justify-center pl-10 "><Image src={Beet} alt="beet" className="w-3/4 h-auto" /></div>
      <div className="lg:w-1/2 xl:w-1/2  2xl:w-1/2 py-24 ">
        <p className="whitespace-pre-wrap break-words max-w-sm mx-24 pb-10">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
        <p className="whitespace-pre-wrap break-words max-w-sm mx-24">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
        </div>
    </div>
        
  </div>
  )
}

export default section

