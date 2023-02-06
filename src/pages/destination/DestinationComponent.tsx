import React from 'react'
import ContainerChild from '../../components/containerChild/ContainerChild'
import ContainerContext from '../../components/containerContent/ContainerContext'
import {useDestination} from "../../../hooks/useDestination"
import Paragrahp from '../../components/paragrahp/Paragrahp'
import LinkComponentDestination from './LinkDestination'
import NavOptions from '../../components/navOptions/navOptions'

const DestinationComponent = () => {

    const [destinatios,currentDestination,handleDestination] = useDestination()

    return (
        <ContainerContext>
            <ContainerChild>
                <section className='w-full h-full flex flex-col'>
                    <h1 className="font-barlow md:text-[28px] text-[16px] text-start text-whiteReq uppercase tracking-[2.50px]">02 pick your destination</h1>
                    <section className='w-full h-full flex items-center justify-center'>
                        <img src={currentDestination?.images.webp} alt="img-destination" className='xl:w-2/3 xl:h-2/3 md:w-[300px] md:h-[300px] w-[259px] h-[259px]' />
                    </section>
                </section>
            </ContainerChild>
            <ContainerChild>
                <section className='w-full h-full flex flex-col  xl:mt-12 '>
                    <NavOptions>
                        {
                            destinatios.map((destination) => {
                                return (
                                    <LinkComponentDestination 
                                    title={destination.name} 
                                    active={destination.name === currentDestination?.name}  
                                    handleDestination={()=>handleDestination(destination)}
                                    key={destination.name}
                                    />
                                )
                            })
                        }
                    </NavOptions>
                    <article className='w-full h-full flex items-center flex-col '>
                        <h1 className="font-bellefair text-[59px] md:text-[80px] xl:text-[100px] text-center text-whiteReq uppercase">{currentDestination?.name}</h1>
                        <Paragrahp text={currentDestination?.description!} />
                        <section className='flex flex-col md:flex-row items-center w-full md:w-2/3  h-1/3 md:h-1/4 border-t-[0.5px] mt-2 md:mt-6 xl:mt-12 md:justify-around border-lilaReq '>
                            <section>
                                <h2 className='text-center font-barlow   md:text-[14px] tracking-[2.4px] text-lilaReq'>AVG.DISTANCE</h2>
                                <p className='text-center font-bellefair  md:text-[28px] text-whiteReq uppercase'>{currentDestination?.distance}</p>
                            </section>
                            <section>
                                <h2 className='text-center font-barlow   md:text-[14px] tracking-[2.4px] text-lilaReq'>EST.TRAVEL TIME</h2>
                                <p className='text-center font-bellefair  md:text-[28px] text-whiteReq uppercase'>{currentDestination?.travel}</p>
                            </section>
                        </section>
                    </article>
                </section>
            </ContainerChild>
        </ContainerContext>
    )
}

export default DestinationComponent

