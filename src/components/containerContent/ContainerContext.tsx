import React from 'react'

interface props{
    children:React.ReactNode
}

const ContainerContext = ({children}:props) => {
  return (
    <section className='md:gap-4  gap-1 box-border md:m-2 md:p-4 flex flex-col h-full md:mt-8 xl:flex-row xl:h-3/4'>
        {children}
    </section>
  )
}

export default ContainerContext