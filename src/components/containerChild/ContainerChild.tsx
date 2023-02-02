import React from 'react'

interface props {
  children: React.ReactNode
}

const ContainerChild = ({ children }: props) => {
  return (
    <section className='flex-1 border-2 border-whiteReq w-full h-full p-2'>
        {children}
    </section>
  )
}

export default ContainerChild