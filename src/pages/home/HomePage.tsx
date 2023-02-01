import React from 'react'
import WrapperNav from '../../components/wrapper/wrapperComponent'
import HomeComponent from './HomeComponent'

const HomePage = () => {
    return (
        <WrapperNav className="bg-homepage w-full h-full">
            <HomeComponent />
        </WrapperNav>
    )
}

export default HomePage