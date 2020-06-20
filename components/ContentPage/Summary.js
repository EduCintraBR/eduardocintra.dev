import React from 'react'

const Summary = ({ title1 }) => {
    return (
        <section className="bg-white rounded-lg shadow-lg py-12 mx-4 px-8">
            <p className="text-2xl">
                { title1 }
            </p>
        </section>
    )
}

export default Summary