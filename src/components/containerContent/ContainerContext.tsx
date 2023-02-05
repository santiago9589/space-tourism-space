import React from 'react'

interface props{
    children:React.ReactNode
}

const ContainerContext = ({children}:props) => {
  return (
    <section className='gap-4 box-border m-2 p-4 flex flex-col h-full mt-8 xl:flex-row xl:h-3/4'>
        {children}
    </section>
  )
}

export default ContainerContext