import React from 'react'
import HomePage from '../../pages/home/HomePage'
import NavbarComponent from '../navbar/navbar.component'

interface props{
    children:React.ReactNode
    className:string
}
const WrapperNav = ({children,className}:props) => {
    return (
        <main className={className}>
            <NavbarComponent />
            {children}
        </main>
    )
}

export default WrapperNav