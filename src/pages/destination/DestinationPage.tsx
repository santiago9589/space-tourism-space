import React from 'react'
import WrapperNav from '../../components/wrapper/wrapperComponent'
import DestinationComponent from './DestinationComponent'

const DestinationPage = () => {
    return (
        <WrapperNav className="bg-destination-sm md:bg-destination-md xl:bg-destination bg-center w-full h-full">
            <DestinationComponent />
        </WrapperNav>
    )
}

export default DestinationPage