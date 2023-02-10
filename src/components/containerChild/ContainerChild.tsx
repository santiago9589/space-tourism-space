import React from 'react'

interface props {
  children: React.ReactNode
}

const ContainerChild = ({ children }: props) => {
  return (
    <section data-testid="ContainerChild" className='flex-1 w-full h-full p-1 md:p-2'>
        {children}
    </section>
  )
}

export default ContainerChild