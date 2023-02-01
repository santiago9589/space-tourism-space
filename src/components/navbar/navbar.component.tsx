import React from 'react'
import LinkComponent from './link.navbar.component'



const NavbarComponent = () => {

    const links = ["01 home", "02 destination", "03 crew", "04 tecnology"]

    return (
        <nav className='py-6 px-4 bg-gradient-to-r from-blackReq flex justify-between items-center w-full'>
            <section className='flex w-1/3 '>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd">
                    <circle cx="24" cy="24" r="24" fill="#FFF" />
                    <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" />
                </g>
                </svg>
            </section>
            <section className='flex justify-around flex-1'>
                {
                    links.map((element) => {
                        return (
                            <LinkComponent title={element} key={element} />
                        )
                    })
                }
            </section>
        </nav>
    )
}

export default NavbarComponent