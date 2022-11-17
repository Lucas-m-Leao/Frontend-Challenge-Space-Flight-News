import React from 'react'
import Lottie from 'react-lottie'
import * as spaceship from '../assets/json/spaceship.json'
import { IconContainer } from '../styles/middleIcon'

const MiddleIcon = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: spaceship,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }
    return (
        <IconContainer>
            <figure>
                <Lottie height={'auto'} options={defaultOptions} />
            </figure>
            <h2>Space Fligth News</h2>
            <hr />
        </IconContainer>
    )
}

export default MiddleIcon
