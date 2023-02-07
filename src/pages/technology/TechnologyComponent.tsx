import React from 'react'
import ContainerChild from '../../components/containerChild/ContainerChild'
import ContainerContext from '../../components/containerContent/ContainerContext'
import Paragrahp from '../../components/paragrahp/Paragrahp'
import { useTech } from "../../../hooks/useTech"
import LinkComponentTech from './LinkTech'
import { AnimatePresence, motion } from "framer-motion"

const TechnologyComponent = () => {

    const [tecnologies, currentTecnology, handelTecnology] = useTech()

    return (
        <ContainerContext>
            <ContainerChild>
                <section className='w-full h-full'>
                    <h1 className="font-barlow md:text-[28px] text-[16px] text-start text-whiteReq uppercase tracking-[2.50px]">04 space launch 101</h1>
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
                            <AnimatePresence mode='wait'>
                                <motion.h3
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    key={currentTecnology.name}
                                    className='barlow text-[16px] uppercase tracking-[2.45px] text-lilaReq'>the technology</motion.h3>
                                <motion.h1
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    key={currentTecnology?.name}
                                    className="font-bellefair text-[40px] text-center text-whiteReq uppercase">{currentTecnology?.name}</motion.h1>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    key={currentTecnology.description} className='text-center font-bellefair  text-[16px] md:text-[28px] text-whiteReq uppercase'>{currentTecnology.description}</motion.p>
                            </AnimatePresence>
                        </section>
                    </article>
                </section>
            </ContainerChild>
            <ContainerChild>
                <AnimatePresence mode="wait">
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        key={currentTecnology.images.portrait}
                        className='w-full h-full xl:flex xl:flex-col  xl:items-center xl:justify-center'>
                        <img
                            src={currentTecnology.images.portrait}
                            alt="img.tecnology"
                            className="w-full h-[170px] md:w-full md:h-[310px] xl:w-[450px] xl:h-[450px]"
                        />
                    </motion.section>
                </AnimatePresence>
            </ContainerChild>
        </ContainerContext>
    )
}

export default TechnologyComponent

