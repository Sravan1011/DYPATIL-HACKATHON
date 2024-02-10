import React from 'react'
import Link from 'next/link'

const navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-100 '>
        <nav className='py-4 bg-red-500'>
         <ul className='container flex gap-10'>
        <li className='ml-10 text-lg hover:border-b font-bold '>
            <Link href='/'>Home</Link>
          </li>
          <li className='ml-10 text-lg hover:border-b font-bold '>
            <Link href='tournament'> Host Tournament</Link>
          </li>
          <li className='ml-10 text-lg hover:border-b font-bold '>
            <Link href='shedule'> Tournament Stream</Link>
          </li>
          <li className='ml-10 text-lg hover:border-b font-bold '>
            <Link href='registration'>Join Team</Link>
          </li>
          </ul>
        </nav>


    </div>
  )
}

export default navbar