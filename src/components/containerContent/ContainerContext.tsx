import React from 'react'
import {motion} from "framer-motion"

interface props{
    children:React.ReactNode
}

const variants = {
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1
  },
  exit:{
    x: "-100vw",
    transition:{ease:"easeInOut"}
  }

}

const ContainerContext = ({children}:props) => {
  return (
    <motion.section
    variants={variants}
    initial="hidden"
    animate="visible"
    exit="exit"
    data-testid="ContainerContext"
    className='md:gap-4 gap-1 box-border md:m-2 md:p-4 flex flex-col h-full md:mt-8 xl:flex-row xl:h-3/4'>
        {children}
    </motion.section>
  )
}

export default ContainerContext