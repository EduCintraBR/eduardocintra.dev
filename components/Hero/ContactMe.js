import React from 'react'
import { FaGithub, FaLinkedin, FaFacebookSquare, FaInstagram } from 'react-icons/fa'

const ContactMe = () => {
    return (
        <div className="mx-8 px-8 relative border border-red-600 rounded md:mx-0 md:px-16 pb-4 pt-10 mt-6">
            <h3 className="absolute text-white px-6 py-2 bg-red-600 top-0 -mt-5 text-2xl uppercase inline">
                meus contatos
            </h3>
            <p className="flex justify-between">
                <a href="https://www.linkedin.com/in/eduardo-cintra-652283127/" className="hover:opacity-75">
                    <FaLinkedin size={64}/>
                </a>
                <a href="https://github.com/educintrabr" className="hover:opacity-75">
                    <FaGithub size={64}/>
                </a>
                <a href="https://www.facebook.com/eduardo.cintrasccp/" className="hover:opacity-75">
                    <FaFacebookSquare size={64}/>
                </a>
                <a href="https://www.instagram.com/educintrabr/" className="hover:opacity-75">
                    <FaInstagram size={64}/>
                </a>
            </p>
            <br/>
            <span>Ou mande seu email para <strong>educin15@gmail.com</strong></span>
        </div>
    )
}

export default ContactMe