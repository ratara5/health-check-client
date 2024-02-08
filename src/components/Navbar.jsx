import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-zinc-700 flex justify-between px-10 py-2'>
        <h1>React PostgreSQL</h1>
        <ul className='flex gap-x-1'>
            <li className='bg-slate-200 px-2 py-1'>
                <Link to="/">Home</Link>
            </li>
            <li className='bg-green-500 px-2 py-1'>
              <Link to="/new">Create</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar