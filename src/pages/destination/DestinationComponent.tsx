import React from 'react'
import ContainerChild from '../../components/containerChild/ContainerChild'
import ContainerContext from '../../components/containerContent/ContainerContext'
import { useDestination } from "../../../hooks/useDestination"
import Paragrahp from '../../components/paragrahp/Paragrahp'
import LinkComponentDestination from './LinkDestination'
import NavOptions from '../../components/navOptions/navOptions'
import { AnimatePresence, motion } from "framer-motion"

const DestinationComponent = () => {

    const [destinatios, currentDestination, handleDestination] = useDestination()

    return (
        <ContainerContext>
            <ContainerChild>
                <section
                    className='w-full h-full flex flex-col'>
                    <h1  className="font-barlow md:text-[28px] text-[16px] text-start text-whiteReq uppercase tracking-[2.50px]">02 pick your destination</h1>
                    <AnimatePresence mode="wait">
                        <motion.section
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            key={currentDestination?.images.webp}
                            className='w-full h-full flex items-center justify-center'>
                            <img src={currentDestination?.images.webp} alt="img-destination" className='xl:w-2/3 xl:h-2/3 md:w-[300px] md:h-[300px] w-[259px] h-[259px]' />
                        </motion.section>
                    </AnimatePresence>
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
                                        handleDestination={() => handleDestination(destination)}
                                        key={destination.name}
                                    />
                                )
                            })
                        }
                    </NavOptions>
                    <article data-testid="article-info" className='w-full h-full flex items-center flex-col '>
                        <AnimatePresence mode="wait">
                            <motion.h1
                                data-testid={`${currentDestination?.name}-id`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                key={currentDestination?.name}
                                className="font-bellefair text-[59px] md:text-[80px] xl:text-[100px] text-center text-whiteReq uppercase">{currentDestination?.name}</motion.h1>
                            <Paragrahp text={currentDestination?.description!} />
                            <section className='flex flex-col md:flex-row items-center w-full md:w-2/3  h-1/3 md:h-1/4 border-t-[0.5px] mt-2 md:mt-6 xl:mt-12 md:justify-around border-lilaReq '>
                                <section>
                                    <motion.h2
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        key={currentDestination?.name}
                                        className='text-center font-barlow   md:text-[14px] tracking-[2.4px] text-lilaReq'>AVG.DISTANCE</motion.h2>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        key={currentDestination?.name} className='text-center font-bellefair  md:text-[28px] text-whiteReq uppercase'>{currentDestination?.distance}</motion.p>
                                </section>
                                <section>
                                    <motion.h2
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        key={currentDestination?.name} className='text-center font-barlow   md:text-[14px] tracking-[2.4px] text-lilaReq'>EST.TRAVEL TIME</motion.h2>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        key={currentDestination?.name} className='text-center font-bellefair  md:text-[28px] text-whiteReq uppercase'>{currentDestination?.travel}</motion.p>
                                </section>
                            </section>
                        </AnimatePresence>
                    </article>
                </section>
            </ContainerChild>
        </ContainerContext>
    )
}

export default DestinationComponent

