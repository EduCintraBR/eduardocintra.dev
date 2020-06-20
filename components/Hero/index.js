import React from 'react'
import ContactMe from './ContactMe'

const Hero = ({ title1, title2, title3, title4 }) => {
    return (
    <div className="md:grid lg:grid-cols-2 pt-2 leading-none">
        <div className="pt-16 lg:pt-32">
            <h1 className="text-4xl uppercase pl-16">{title1}</h1>
            <h3 className="text-4xl lg:text-5xl font-bold uppercase pl-16">{title2}</h3>
            <ContactMe title1={title3} title2={title4} />
        </div>
        <figure>
            <img src="/images/eduardo-cintra.png" className="pr-8 md:ml-16" />
        </figure>
    </div>
    )
}

export default Hero