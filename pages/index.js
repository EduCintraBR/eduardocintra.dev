import React from 'react';
import { FaGithub, FaStar, FaLaptopCode, FaLinkedin, FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import getUser from '../utils/getUser'


const Index = (props) => {
    return(
        <div className="container mx-auto">
            <div className="grid grid-cols-2 pt-2 leading-none">
                <div className="pt-48">
                    <h1 className="text-4xl uppercase pl-16">Olá, eu sou o Eduardo Cintra</h1>
                    <h3 className="text-5xl lg:text-5xl font-bold uppercase pl-16">Desenvolvedor Fullstack</h3>

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
                            <a href="https://www.instagram.com/educintrabr/"><FaInstagram size={64}/></a>
                        </p>
                        <br/>
                        <span>Ou mande seu email para <strong>educin15@gmail.com</strong></span>
                    </div>
                </div>
                <div> 
                    <img src="/images/eduardo-cintra.png" />
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg py-12 px-8">
                <p className="text-2xl">
                    Olá, bem vindo a minha página! Meu nome é Eduardo sou natural de São Sebastião do Paraíso sul de Minas Gerais, tenho 23 anos
                    , sou bacharel em sistemas de informação e apaixonado por tecnologia. Busco uma oportunidade de entrar e me estabelecer no 
                    mercado de desenvolvimento, pra isso estou estudando sempre novas tecnologias e implementando projetos próprios. Desejo me tornar 
                    um freelancer ou trabalhar em uma grande empresa de tecnologia, enfim espero que goste do meu portfólio.
                </p>
            </div>

            <span>
                <h3 className="text-4xl pt-12 pb-8 text-center text-red-600 uppercase">O que eu faço</h3>
            </span>
            <div className="bg-white rounded-lg shadow-lg py-12 px-8">
                <p className="text-2xl">
                    Desde 2018 trabalhando na área de TI como suporte técnico e desenvolvedor Delphi e atualmente como desenvolvedor pleno Visual Basic 6. 
                    Entusiasta e estudante da stack JavaScript (NodeJs, ReactJs, NextJs, etc.), estou em processo para me tornar um desenvolvedor Fullstack,
                    atualmente estou cursando o Fullstack Master da <a href="https://devpleno.com/" className="font-bold">Devpleno.</a> Veja mais abaixo meus
                    projetos e contribuições no GitHub.
                </p>
            </div>

            <span>
                <h3 className="text-4xl pt-12 pb-8 text-center text-red-600 uppercase">Minha Formação</h3>
            </span>
            <div className="bg-white rounded-lg shadow-lg py-4 px-8">
                <h3 className="text-center text-red-600 uppercase text-xl">bacharelado</h3>
                <h3 className="text-center uppercase text-2xl">Sistemas de informação</h3>
                <h3 className="text-center font-bold uppercase text-xl">Libertas faculdades integradas</h3>
            </div>

            <span>
                <h3 className="text-4xl pt-12 pb-8 text-center text-red-600 uppercase">Meus repositórios</h3>
            </span>
            <div className="grid grid-cols-3 pb-8">
                {props.repos.map(res => {
                    return (
                        <div className="rounded-lg bg-white px-8 py-4 m-1 hover:shadow-lg">
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
            <footer className="p-4 text-center">
                <span className="text-gray-700">Desenvolvido por Eduardo Cintra - 2020</span>
            </footer>
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