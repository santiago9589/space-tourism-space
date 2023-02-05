import React from "react"

interface props{
    text:string
}

const Paragrahp = ({text}:props) =>{
    return (
        <p className='font-barlow text-[18px] text-lilaReq capitalize w-full text-center'>{text}</p>
    )
}

export default Paragrahp