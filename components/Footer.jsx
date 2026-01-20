import Image from 'next/image'
import React from 'react'
import { assets } from '@/Assets/assets'

function Footer() {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
      <Image src={assets.logo_light } alt=' ' width={120} />
      <p className='text-sm text-white '>All rights reserved © 2024</p>
      <div className='flex'>
        <Image src={assets.facebook_icon} alt=' ' width={40} className='mx-2'/>
        <Image src={assets.twitter_icon} alt=' ' width={40} className='mx-2'/>
        <Image src={assets.googleplus_icon} alt=' ' width={40} className='mx-2'/>
      </div>
    </div>
  )
}

export default Footer
