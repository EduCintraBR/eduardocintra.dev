import React from 'react'

const Footer = ({ title1, title2 }) => {
    return (
        <footer className="my-12 text-center">
            <span className="text-gray-700 font-bold">{title1}</span>
            <br/>
            <span className="text-gray-700">{title2}</span>
            <br/>
        <span className="text-gray-700">
            <a href="https://github.com/EduCintraBR/eduardocintra.dev" className="hover:opacity-75">
                https://github.com/EduCintraBR/eduardocintra.dev
            </a>
        </span>
    </footer>
    )
}

export default Footer