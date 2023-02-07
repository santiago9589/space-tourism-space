import React from "react"
import { motion } from "framer-motion"

interface props {
    text: string
}

const Paragrahp = ({ text }: props) => {
    return (
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={text}
            className='font-barlow xl:text-[25px] md:text-[18px] text-[15px] text-lilaReq capitalize w-full  md:w-2/3 xl:w-3/4 text-center'>{text}</motion.p>
    )
}

export default Paragrahp