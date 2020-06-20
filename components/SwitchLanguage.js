import React from 'react'

const SwitchLanguage = ({ path, linkImg, label }) => {
    return (
        <a href={path} >
            <picture>
                <img src={linkImg} className="duration-700 hover:opacity-75 mx-auto md:inline block md:m-0" width="64" height="64"/>
                <strong className="md:mx-0 block md:inline text-center md:ml-4">{label}</strong>
            </picture>
        </a>
    )
}

export default SwitchLanguage