import React from 'react'
import ContainerChild from '../../components/containerChild/ContainerChild'
import ContainerContext from '../../components/containerContent/ContainerContext'
import Paragrahp from '../../components/paragrahp/Paragrahp'

const HomeComponent = () => {
    return (
        <ContainerContext>
            <ContainerChild>
                <section className='w-full h-full flex items-center flex-col justify-center'>
                    <p className='text-center w-full font-barlow xl:text-[28px] text-[20px] uppercase text-lilaReq tracking-[4.72px]'>So, you want to travel to</p>
                    <h1 className='text-center uppercase font-bellefair text-[150px] w-full text-whiteReq'>Space</h1>
                    <Paragrahp text='Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!'/>
                </section>
            </ContainerChild>
            <ContainerChild>
                <section className='w-full h-full flex items-center flex-col xl:justify-center justify-start'>
                    <section className='w-[242px] h-[242px] xl:w-[274px] xl:h-[274px] rounded-full bg-whiteReq text-blackReq flex justify-center items-center'>
                        <h1 className='font-bellefair text-[32px] tracking-[2px]'>EXPLORER</h1>
                    </section>
                </section>
            </ContainerChild>
        </ContainerContext>
    )
}

export default HomeComponent

