import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div style={{display:"flex", gap:"20px", justifyContent:"center", padding:"20px",fontSize:"20px",fontFamily:"sans-serif"}}>

          <Link href="/">YOGESH NISHAD</Link>
          <Link href="/project">PROJECT</Link>
          <Link href="/exprience">EXPRIENCE</Link>
    </div>
  )
}

export default Navbar