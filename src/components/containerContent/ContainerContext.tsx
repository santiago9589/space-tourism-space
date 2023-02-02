import React from 'react'

interface props{
    children:React.ReactNode
}

const ContainerContext = ({children}:props) => {
  return (
    <section className='gap-4 box-border m-2 p-4 flex h-3/4 mt-8 border-2 border-whiteReq'>
        {children}
    </section>
  )
}

export default ContainerContext