import React from 'react'
import{Link} from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
const Banner = () => {
  return (
    <div className='px-4 py-32 bg-black mx-auto'>
        <div className='text-white text-center'>
            <h1 className='text-5xl lg:text-4xl leading-snug font-bold mb-5'>Welcome To Our BloggerWeb</h1>
            <p className='text-gray-200 lg:w-3/5 mx-auto mb-5 font-primary'>STart your blog todayand join a community of writers and readers who are passionate about shareimg their stories and udea huih hf hyuyu fdsuhg gygw</p>
            <div>
                <Link to="/" className='font-medium hover:text-orange-500 inline-flex items-center'>Learn more  <FaArrowRight className='mt-1 ml-2'/></Link>
            </div>
        </div>
        </div>
  )
}

export default Banner