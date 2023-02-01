import React from 'react'
import WrapperNav from '../../components/wrapper/wrapperComponent'
import DestinationComponent from './DestinationComponent'

const DestinationPage = () => {
    return (
        <WrapperNav className="bg-destination w-full h-full">
            <DestinationComponent />
        </WrapperNav>
    )
}

export default DestinationPage