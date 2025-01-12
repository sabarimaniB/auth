import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-slate-400 text-white'>
        <div className='flex justify-between items-center max-w-5xl mx-auto p-4'>
            <div className='font-bold'><h1>Auth</h1></div>
            <div>
                <ul className='flex gap-8 '>
                    <Link to={'/'} >Home</Link>
                    <Link to={'/About'}>About</Link>
                    <Link to={'/Signin'}>Signin</Link>
                </ul>
            </div>
        </div>

        
    </div>
  )
}
