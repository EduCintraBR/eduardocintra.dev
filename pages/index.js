import React from 'react';
import { FaStar, FaLaptopCode } from 'react-icons/fa'
import PageHead from '../components/PageHead'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import getUser from '../utils/getUser'


const Index = (props) => {
    return(
        <div className="container mx-auto bg-network-left lg:bg-network-right">
            <PageHead />
            <Hero />
            <div className="bg-white rounded-lg shadow-lg py-12 mx-4 px-8">
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
            <div className="bg-white rounded-lg shadow-lg py-12 mx-4 px-8">
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
            <div className="bg-white rounded-lg shadow-lg py-4 mx-4 px-8">
                <h3 className="text-center text-red-600 uppercase text-xl">bacharelado</h3>
                <h3 className="text-center uppercase text-2xl">Sistemas de informação</h3>
                <h3 className="text-center font-bold uppercase text-xl">Libertas faculdades integradas</h3>
            </div>

            <span>
                <h3 className="text-4xl pt-12 pb-8 text-center text-red-600 uppercase">Meus repositórios</h3>
            </span>
            <div className="md:grid lg:grid-cols-3 lg:pb-8 pb-2">
                {props.repos.map(res => {
                    return (
                        <div className="rounded-lg bg-white px-8 mx-2 py-4 m-1 hover:shadow-lg">
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
            <Footer />
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