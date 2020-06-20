import React from 'react'

const Education = ({ title1, title2, title3 }) => {
    return (
        <section>
            <span>
                <h3 className="text-4xl pt-12 pb-8 text-center font-bold text-red-600 uppercase">{title1}</h3>
            </span>
            <div className="bg-white rounded-lg shadow-lg py-4 mx-4 px-8">
                <h3 className="text-center text-red-600 font-bold uppercase text-xl">{title2}</h3>
                <h3 className="text-center uppercase text-2xl">{title3}</h3>
                <h3 className="text-center font-bold uppercase text-xl">Libertas Faculdades Integradas</h3>
            </div>
        </section>
    )
}

export default Education