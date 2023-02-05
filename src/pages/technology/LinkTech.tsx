import React from 'react'
import { LinksUrl } from '../../types/LinkUrl'
import { Link} from "react-router-dom"

interface propsTechLink{
    active:boolean
    handleTech:()=>void
    index:number
}

const LinkComponentTech = ({active,handleTech,index}: propsTechLink) => {

  return (
      <section onClick={handleTech} className= {`${active ? ("bg-whiteReq text-blackReq"):("bg-blackReq text-whiteReq")} flex items-center justify-center border-[0.5px] border-whiteReq w-12 h-12 rounded-full`}>{index+1}</section>
  )
}

export default LinkComponentTech

