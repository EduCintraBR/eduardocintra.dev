import React from 'react';
import { FaGithub, FaStar, FaLaptopCode } from 'react-icons/fa'
import getUser from '../utils/getUser'


const Index = (props) => {
    return(
        <div className="container mx-auto">
            <h1 className="text-5xl text-center">Olá, eu sou o Eduardo Cintra</h1>

            <div className="md:flex bg-gray-100 rounded-lg p-6">
                <img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src={props.myGit.avatar_url} alt="Eduardo Cintra"/>
                <div className="text-center md:text-left">
                    <h2 className="text-lg">{props.myGit.name}</h2>
                    <div className="text-gray-700">educin15@gmail.com</div>
                    <div className="text-gray-700">{props.myGit.location}</div>
                    <div className="md:flex ">
                        <a href={props.myGit.html_url}>
                            <FaGithub size={32} className="hover:opacity-75"/>
                        </a>
                    </div>
                </div>
                
            </div>
            
            <h3 className="text-2xl font-bold text-center">Meus repositórios do GitHub</h3>
            {props.repos.map(res => {
                return (
                    <div className="rounded-lg bg-gray-200 px-8 py-4 m-4 hover:shadow-lg">
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
                    </div>
                )
            })}
        </div>
    )
}

export async function getServerSideProps(context) {
    const { repo, me } = await getUser('educintrabr')

    return {
        props: {
            repos: repo,
            myGit : me
        }
    }
}

export default Index