import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <div className='TopHead'>
            <Link><h1>MRK Airport Managment</h1></Link>
        </div>
        <div className='BotHead'>
            <Link href='/'>Flight List</Link>
            <Link href='/'>Flight</Link>
            <Link href='/'></Link>

        </div>
    </header>
  )
}

export default Header