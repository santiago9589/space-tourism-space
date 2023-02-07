import React from 'react'
import { LinksUrl } from '../../types/LinkUrl'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

interface propsCrewLink {
  active: boolean
  handleCrew: () => void
}

const LinkComponentCrew = ({ active, handleCrew }: propsCrewLink) => {

  return (
    <motion.section
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleCrew} className={`${!active ? ("opacity-50 ") : ("")} bg-whiteReq w-4 h-4 rounded-full`}></motion.section>
  )
}

export default LinkComponentCrew

