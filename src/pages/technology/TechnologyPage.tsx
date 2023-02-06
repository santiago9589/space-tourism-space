import React from 'react'
import WrapperNav from '../../components/wrapper/wrapperComponent'
import TechnologyComponent from './TechnologyComponent'



const TecnologyPage = () => {
    return (
        <WrapperNav className="bg-technology-sm md:bg-technology-md xl:bg-technology bg-center w-full h-full">
            <TechnologyComponent/>
        </WrapperNav>
    )
}

export default TecnologyPage