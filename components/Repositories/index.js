import React from 'react'
import { FaStar, FaLaptopCode } from 'react-icons/fa'

const Index = ({props}) => {
    return (
        <section>
            <span>
                <h3 className="text-4xl pt-12 pb-8 text-center text-red-600 uppercase">Meus repositórios</h3>
            </span>
            <div className="md:grid lg:grid-cols-3 lg:pb-8 pb-2">
                {props.repos.map(res => {
                    return (
                        <section key={`repos-${res.id}`} className="rounded-lg bg-white px-8 mx-2 py-4 m-1 hover:shadow-lg">
                            <h3 className="text-lg font-bold">
                                <a href={res.url_repo}>
                                    {res.full_name}
                                </a>
                            </h3>
                            <p> 
                                <span className="mx-2">
                                    <FaLaptopCode size={24} className="inline"/>
                                </span>
                                {res.language}
                                <span className="mx-2">
                                    <FaStar size={24} className="text-yellow-400 inline"/>
                                </span> 
                                {res.stars} 
                            </p>
                        </section>
                    )
                })}
            </div>
        </section>
    )
}

export default Index