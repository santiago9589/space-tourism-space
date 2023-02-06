import React from "react"

interface props{
    text:string
}

const Paragrahp = ({text}:props) =>{
    return (
        <p className='font-barlow xl:text-[25px] md:text-[18px] text-[15px] text-lilaReq capitalize w-full  md:w-2/3 xl:w-3/4 text-center'>{text}</p>
    )
}

export default Paragrahp