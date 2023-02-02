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
                    <h1 className="font-barlow text-[28px] text-start text-whiteReq uppercase tracking-[2.50px]">02 pick your destination</h1>
                    <section className='w-full h-full flex items-center justify-center'>
                        <img src={currentDestination?.images.webp} alt="img-destination" className='w-2/3 h-2/3' />
                    </section>
                </section>
            </ContainerChild>
            <ContainerChild>
                <section className='w-full h-full flex flex-col mt-2'>
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
                        <h1 className="font-bellefair text-[100px] text-center text-whiteReq uppercase">{currentDestination?.name}</h1>
                        <Paragrahp text={currentDestination?.description!} />
                        <section className='flex items-center w-2/3 h-full border-t-[0.5px] mt-4 justify-around border-lilaReq '>
                            <section className='mt-2'>
                                <h2 className='font-barlow text-[14px] tracking-[2.4px] text-lilaReq'>AVG.DISTANCE</h2>
                                <p className='font-bellefair text-[28px] text-whiteReq uppercase'>{currentDestination?.distance}</p>
                            </section>
                            <section className='mt-2'>
                                <h2 className='font-barlow text-[14px] tracking-[2.4px] text-lilaReq'>EST.TRAVEL TIME</h2>
                                <p className='font-bellefair text-[28px] text-whiteReq uppercase'>{currentDestination?.travel}</p>
                            </section>
                        </section>
                    </article>
                </section>
            </ContainerChild>
        </ContainerContext>
    )
}

export default DestinationComponent