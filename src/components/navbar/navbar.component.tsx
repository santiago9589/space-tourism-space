import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LinksUrl } from '../../types/LinkUrl'
import AsideComponent from '../asideComponent/AsideComponent'
import LinkComponent from './link.navbar.component'



const NavbarComponent = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)


    const links: LinksUrl[] = [{
        title: "01 home",
        url: "/"
    },
    {
        title: "02 destination",
        url: "/destination"
    },
    {
        title: "03 crew",
        url: "/crew"
    },
    {
        title: "04 technology",
        url: "/technology"
    },
    ]

    return (
        <nav className='py-6 px-4 bg-gradient-to-r from-blackReq flex justify-between items-center w-full relative'>
            <section
                className='md:flex md:w-1/3 ' onClick={() => { navigate("/") }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd">
                    <circle cx="24" cy="24" r="24" fill="#FFF" />
                    <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" />
                </g>
                </svg>
            </section>
            <section className='hidden md:flex md:justify-around md:flex-1   '>
                {
                    links.map((element) => {
                        return (
                            <LinkComponent title={element.title} url={element.url} key={element.title} active={location.pathname === element.url} />
                        )
                    })
                }
            </section>
            <svg onClick={(e) => {
                e.preventDefault()
                setIsOpen(true)
            }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${isOpen ? ("hidden") : ("")} md:hidden text-whiteReq w-6 h-6`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
            {
                isOpen ? (<AsideComponent links={links} isOpen={isOpen} setIsOpen={setIsOpen} />) : (null)
            }
        </nav>
    )
}

export default NavbarComponent