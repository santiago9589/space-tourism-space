import React from 'react'

interface props {
  title: string
}

const LinkComponent = ({ title }: props) => {
  return (
    <h2 className='uppercase text-lg text-whiteReq font-barlow flex tracking-widest'>{title}</h2>
  )
}

export default LinkComponent