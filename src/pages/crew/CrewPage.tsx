import React from 'react'
import WrapperNav from '../../components/wrapper/wrapperComponent'
import CrewComponent from './CrewComponent'


const CrewPage = () => {
    return (
        <WrapperNav className="bg-crew-sm md:bg-crew-md xl:bg-crew bg-center w-full h-full">
            <CrewComponent />
        </WrapperNav>
    )
}

export default CrewPage