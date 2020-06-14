import React from 'react'
import ContactMe from './ContactMe'

const Hero = () => {
    return (
    <div className="md:grid lg:grid-cols-2 pt-2 leading-none">
        <div className="pt-16 lg:pt-32">
            <h1 className="text-4xl uppercase pl-16">Olá, eu sou o Eduardo Cintra</h1>
            <h3 className="text-4xl lg:text-5xl font-bold uppercase pl-16">Desenvolvedor Fullstack</h3>
            <ContactMe />
        </div>
        <figure>
            <img src="/images/eduardo-cintra.png" className="pr-8 md:ml-16" />
        </figure>
    </div>
    )
}

export default Hero