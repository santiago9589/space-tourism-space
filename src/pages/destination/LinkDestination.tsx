import React from 'react'
import { LinksUrl } from '../../types/LinkUrl'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

interface propsDestinationLink {
  active: boolean
  title: string
  handleDestination: () => void
}

const LinkComponentDestination = ({ title, active, handleDestination }: propsDestinationLink) => {

  return (
    <motion.h2
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleDestination} className={`${active ? ("border-b-2 ") : ("")} box-border uppercase  text-[14px] md:text-lg text-whiteReq font-barlow tracking-widest h-full`}>{title}</motion.h2>
  )
}

export default LinkComponentDestination

