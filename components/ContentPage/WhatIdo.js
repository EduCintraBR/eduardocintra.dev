import React from 'react'

const WhatIdo = ({ title1, title2 }) => {
    return (
        <section>
            <span>
                <h3 className="text-4xl pt-12 pb-8 text-center font-bold text-red-600 uppercase">{ title1 }</h3>
            </span>
            <div className="bg-white rounded-lg shadow-lg py-12 mx-4 px-8">
                <p className="text-2xl">
                    { title2 }
                </p>
            </div>
        </section>
    )
}

export default WhatIdo