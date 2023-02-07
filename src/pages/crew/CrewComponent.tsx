import React from 'react'
import ContainerChild from '../../components/containerChild/ContainerChild'
import ContainerContext from '../../components/containerContent/ContainerContext'
import Paragrahp from '../../components/paragrahp/Paragrahp'
import { useCrew } from "../../../hooks/useCrew"
import LinkComponentCrew from './LinkCrew'
import NavOptions from '../../components/navOptions/navOptions'
import { AnimatePresence, motion } from "framer-motion"


const CrewComponent = () => {

    const [crews, currentCrew, handleCrew] = useCrew()

    return (
        <ContainerContext>
            <ContainerChild>
                <section className='w-full h-full flex flex-col'>
                    <h1 className="font-barlow md:text-[28px] text-[16px] text-start text-whiteReq uppercase tracking-[2.50px]">03 Meet your crew</h1>
                    <section className='w-full h-2/3 flex  items-center justify-center flex-col'>
                        <AnimatePresence mode="wait">
                            <motion.h3
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                key={currentCrew.role} className='text-center font-bellefair text-[16px] md:text-[32px] uppercase text-lilaReq'>{currentCrew.role}</motion.h3>
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                key={currentCrew.name}
                                className='text-center font-bellefair text-[24px] md:text-[56px] uppercase text-whiteReq' >{currentCrew.name}</motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                key={currentCrew.bio}
                                className='font-barlow xl:text-[25px] md:text-[18px] text-[15px] text-lilaReq capitalize w-full  md:w-2/3 xl:w-3/4 text-center'>{currentCrew.bio}</motion.p>
                        </AnimatePresence>
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
                <AnimatePresence mode="wait">
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        key={currentCrew.images.png}
                        className='w-full h-full flex flex-col mt-2 items-center justify-center'>
                        <img src={currentCrew.images.png} alt="pic.person" className=' w-[227px] h-[250px] md:w-[300px] md:h-full ' />
                    </motion.section>
                </AnimatePresence>
            </ContainerChild>
        </ContainerContext>
    )
}

export default CrewComponent