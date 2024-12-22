import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div>
        <Image src={'/logo.svg'} width={40} height={40}/>
        <h2>AI Room Designer</h2>
    </div>
  )
}

export default Header