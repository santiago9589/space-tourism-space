import React from 'react'
import WrapperNav from '../../components/wrapper/wrapperComponent'
import HomeComponent from './HomeComponent'

const HomePage = () => {
    return (
        <WrapperNav className="bg-homepage-sm md:bg-homepage-md xl:bg-homepage bg-center w-full h-full">
            <HomeComponent />
        </WrapperNav>
    )
}

export default HomePage