import React from 'react';
import PageHead from '../components/PageHead'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Summary from '../components/ContentPage/Summary'
import WhatIdo from '../components/ContentPage/WhatIdo'
import Education from '../components/ContentPage/Education'
import Repositories from '../components/Repositories'
import SwitchLanguage from '../components/SwitchLanguage'
import getUser from '../utils/getUser'


const Index = ({ repos }) => {
    return(
        <div className="container mx-auto bg-network-left lg:bg-network-right">
            <PageHead />
            <SwitchLanguage path={"/"} linkImg={"images/usa.png"} label={"Switch language"} />
            <Hero 
                title1={"Olá, eu sou o Eduardo Cintra"}
                title2={"Desenvolvedor Fullstack"}
                title3={"meus contatos"}
                title4={"Ou mande seu email para "}
            />
            <main>
                <Summary 
                    title1={
                        `Olá, bem vindo a minha página! Meu nome é Eduardo sou natural de São Sebastião do Paraíso sul de Minas Gerais, tenho 23 anos
                        , sou bacharel em sistemas de informação e apaixonado por tecnologia. Busco uma oportunidade de entrar e me estabelecer no 
                        mercado de desenvolvimento, pra isso estou estudando sempre novas tecnologias e implementando projetos próprios. Desejo me tornar 
                        um freelancer ou trabalhar em uma grande empresa de tecnologia, enfim espero que goste do meu portfólio.`
                        }
                />
                <WhatIdo 
                    title1={"O que eu faço"}
                    title2={
                            `Desde 2018 trabalhando na área de TI como suporte técnico e desenvolvedor Delphi e atualmente como desenvolvedor pleno Visual Basic 6. 
                            Entusiasta e estudante da stack JavaScript (NodeJs, ReactJs, NextJs, etc.), estou em processo para me tornar um desenvolvedor Fullstack,
                            atualmente estou cursando o Fullstack Master da `
                        }
                />
                <Education 
                    title1={"Minha Formação"}
                    title2={"bacharelado"}
                    title3={"Sistemas de informação"}
                    title4={"Libertas faculdades integradas"}
                />
                <Repositories 
                    repos={repos} 
                    title1={"meus repositórios"}
                />
            </main>
            <Footer 
                title1={"Este site foi desenvolvido com NextJS + SSR (Server Side Rendering) + Vercel (como plataforma)"}
                title2={"Você pode encontrar o código fonte deste website em:"}
            />
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