import React from 'react'

interface props{
    children:React.ReactNode
}


const NavOptions = ({children}:props) => {
  return (
    <nav className='flex justify-center items-center space-x-10'>
        {children}
    </nav>
  )
}

export default NavOptions