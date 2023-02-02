import React from 'react'
import ContainerChild from '../../components/containerChild/ContainerChild'
import ContainerContext from '../../components/containerContent/ContainerContext'
import Paragrahp from '../../components/paragrahp/Paragrahp'
import { useCrew } from "../../../hooks/useCrew"
import LinkComponentCrew from './LinkCrew'
import NavOptions from '../../components/navOptions/navOptions'


const CrewComponent = () => {

    const [crews, currentCrew, handleCrew] = useCrew()

    return (
        <ContainerContext>
            <ContainerChild>
                <section className='w-full h-full flex flex-col'>
                    <h1 className="font-barlow text-[28px] text-start text-whiteReq uppercase tracking-[2.50px]">03 Meet your crew</h1>
                    <section className='w-full h-2/3 flex  items-center justify-center flex-col'>
                        <h3 className='text-center font-bellefair text-[32px] uppercase text-lilaReq'>{currentCrew.role}</h3>
                        <h2 className='text-center font-bellefair text-[56px] uppercase text-whiteReq' >{currentCrew.name}</h2>
                        <Paragrahp text={currentCrew.bio} />
                    </section>
                    <NavOptions>
                        {
                            crews.map((crew) => {
                                return (
                                    <LinkComponentCrew
                                        active={crew.name === currentCrew?.name}
                                        handleCrew={() => handleCrew(crew)}
                                        key={crew.name}
                                    />
                                )
                            })
                        }
                    </NavOptions>
                </section>
            </ContainerChild>
            <ContainerChild>
                <section className='w-full h-full flex flex-col mt-2 items-center justify-center'>
                    <img src={currentCrew.images.png} alt="pic.person" className='w-[300px] flex h-full' />
                </section>
            </ContainerChild>
        </ContainerContext>
    )
}

export default CrewComponent