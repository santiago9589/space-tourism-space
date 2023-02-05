import React from 'react'
import ContainerChild from '../../components/containerChild/ContainerChild'
import ContainerContext from '../../components/containerContent/ContainerContext'
import Paragrahp from '../../components/paragrahp/Paragrahp'
import { useTech } from "../../../hooks/useTech"
import LinkComponentTech from './LinkTech'

const TechnologyComponent = () => {

    const [tecnologies, currentTecnology, handelTecnology] = useTech()

    return (
        <ContainerContext>
            <ContainerChild>
                <section className='w-full h-full'>
                    <h1 className="font-barlow text-[28px] text-start text-whiteReq uppercase tracking-[2.50px]">04 space launch 101</h1>
                    <article className='flex w-full h-5/6 items-center flex-col xl:flex-row'>
                        <nav className='flex xl:flex-col h-full xl:w-1/4 w-full items-center justify-center xl:space-y-6 space-x-6 xl:space-x-0'>
                            {
                                tecnologies.map((crew, index) => {
                                    return (
                                        <LinkComponentTech
                                            active={crew.name === currentTecnology?.name}
                                            handleTech={() => handelTecnology(crew)}
                                            index={index}
                                            key={crew.name}
                                        />
                                    )
                                })
                            }
                        </nav>
                        <section className='p-2 box-border flex flex-col w-full justify-center items-center'>
                            <h3 className='barlow text-[16px] uppercase tracking-[2.45px] text-lilaReq'>the technology</h3>
                            <h1 className="font-bellefair text-[40px] text-center text-whiteReq uppercase">{currentTecnology?.name}</h1>
                            <Paragrahp text={currentTecnology.description} />
                        </section>
                    </article>
                </section>
            </ContainerChild>
            <ContainerChild>
                <section className='w-full h-full xl:flex xl:flex-col  xl:items-center xl:justify-center'>
                            <img 
                            src={currentTecnology.images.portrait}
                             alt="img.tecnology"
                             className="w-full h-[310px] xl:w-[450px] xl:h-[450px]"
                             />
                </section>
            </ContainerChild>
        </ContainerContext>
    )
}

export default TechnologyComponent

