import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-slate-500 text-white'>
        <div className='flex justify-between items-center max-w-5xl mx-auto p-3'>
            <div className='font-bold'><h1>Auth</h1></div>
            <div>
                <ul className='flex gap-4'>
                    <Link to={'/'} >Home</Link>
                    <Link to={'/About'}>About</Link>
                    <Link to={'/Signin'}>Signin</Link>
                </ul>
            </div>
        </div>

        
    </div>
  )
}
