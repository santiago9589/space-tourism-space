import React from 'react'
import { LinksUrl } from '../../types/LinkUrl'
import { Link} from "react-router-dom"

interface propsDestinationLink{
    active:boolean
    title:string
    handleDestination:()=>void
}

const LinkComponentDestination = ({title,active,handleDestination}: propsDestinationLink) => {

  return (
      <h2 onClick={handleDestination} className= {`${active ? ("border-b-2 "):("")} box-border uppercase  text-[14px] md:text-lg text-whiteReq font-barlow tracking-widest h-full`}>{title}</h2>
  )
}

export default LinkComponentDestination

