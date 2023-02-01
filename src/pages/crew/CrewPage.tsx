import React from 'react'
import WrapperNav from '../../components/wrapper/wrapperComponent'
import CrewComponent from './CrewComponent'


const CrewPage = () => {
    return (
        <WrapperNav className="bg-crew w-full h-full">
            <CrewComponent />
        </WrapperNav>
    )
}

export default CrewPage