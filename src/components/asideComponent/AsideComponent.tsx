import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { LinksUrl } from '../../types/LinkUrl'
import LinkComponent from '../navbar/link.navbar.component'

interface props {
    links: LinksUrl[]
    isShowAside: boolean
    setIsShowAside: React.Dispatch<React.SetStateAction<boolean>>
}

const AsideComponent = ({ links,setIsShowAside,isShowAside }: props) => {

    const location = useLocation()

    return (

        <section className='absolute right-0 top-0 backdrop-blur-sm bg-blackReq/30 w-[250px] h-[600px]'>
            <svg onClick={(e) => {
                e.preventDefault()
                setIsShowAside(!isShowAside)
            }} className="text-whiteReq w-6 h-6 absolute right-2 top-2"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <section className='flex flex-col mt-12 space-y-6'>
            {
                    links.map((element) => {
                        return (
                            <LinkComponent title={element.title} url={element.url} key={element.title} active={location.pathname === element.url} />
                        )
                    })
                }
            </section>
        </section>)

}

export default AsideComponent