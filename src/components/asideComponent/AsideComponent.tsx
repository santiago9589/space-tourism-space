import React, { useState } from 'react'
import { Location, useLocation } from 'react-router-dom'
import { LinksUrl } from '../../types/LinkUrl'
import LinkComponent from '../navbar/link.navbar.component'


interface props {
    links: LinksUrl[]
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    location: Location
    handleNavigate: (url: string) => void
}

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}


const AsideComponent = ({ links, setIsOpen, location, handleNavigate }: props) => {

    return (
        <nav
            data-testid="asideComponent"
            className='md:hidden absolute right-0 top-0 backdrop-blur-sm bg-blackReq/30 w-[250px] h-[600px] z-10'
        >
            <svg
            role="img" 
            onClick={(e) => {
                e.preventDefault()
                setIsOpen(false)
            }} className="text-whiteReq w-6 h-6 absolute right-2 top-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <section className='flex flex-col mt-12 space-y-6'>
                {
                    links.map((element) => {
                        return (
                            <LinkComponent title={element.title} url={element.url} key={element.title} handleNavigate={handleNavigate} active={location.pathname === element.url} />
                        )
                    })
                }
            </section>
        </nav>)

}

export default AsideComponent