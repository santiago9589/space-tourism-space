import React from 'react'
import { LinksUrl } from '../../types/LinkUrl'
import { Link, useNavigate } from "react-router-dom"
import {motion} from "framer-motion"

interface propsLink extends LinksUrl {
  active: boolean
}


const LinkComponent = ({ title, url, active }: propsLink) => {

  const navigate = useNavigate()

  return (

    <motion.h2 
    whileHover={{ scale: 1.1}}
    whileTap={{ scale: 0.9 }}
    onClick={() => navigate(url)} className={`${active ? ("border-b-2") : ("")} box-border border-whiteReq uppercase  text-[14px] md:text-lg text-whiteReq font-barlow tracking-widest h-full`}>{title}</motion.h2>

  )
}


export default LinkComponent