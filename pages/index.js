import React from 'react';
import PageHead from '../components/PageHead'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Summary from '../components/ContentPage/Summary'
import WhatIdo from '../components/ContentPage/WhatIdo'
import Education from '../components/ContentPage/Education'
import Repositories from '../components/Repositories'
import SwitchLanguage from '../components/SwitchLanguage'


const Index = ({ repos }) => {
    return(
        <div className="container mx-auto bg-network-left lg:bg-network-right">
            <PageHead />
            <SwitchLanguage path={"/pt-br"} linkImg={"images/brasil.png"} label={"Mudar Idioma"} />
            <Hero 
                title1={"Hi, I'm Eduardo Cintra"}
                title2={"Fullstack Developer"}
                title3={"contact me"}
                title4={"or you can send me "}
            />
            <main>
                <Summary 
                    title1={
                            `Hello, welcome to my resume. My name is Eduardo and I'm a Brazilian developer who lives in the south of Minas Gerais. 
                            I'm 23 years old and I have a graduation degree in computer information systems. 
                            I love technology and I'm looking for an opportunity to enter the development market, for that I always study and practice with my projects. 
                            I wish to become a freelancer developer or work in a great technology company. I hope you'll like my resume.`
                        }
                />
                <WhatIdo 
                    title1={"what i do"}
                    title2={
                            `I'm working with technology since 2018 as a support technical and Delphi developer and currently as a Visual Basic developer. 
                            I am an enthusiastic and student of Javascript stack (NodeJs, ReactJs, NextJs, etc.). 
                            I am in a process to be a fullstack developer, currently, I'm studying the Fullstack Master of`
                        }
                />
                <Education 
                    title1={"my education"}
                    title2={"graduation's degree"}
                    title3={"computer's information systems"}
                />
                <Repositories 
                    repos={repos}
                    title1={"my repositories"}
                />
            </main>
            <Footer 
                title1={"This site was built with NextJS + SSR (Server Side Rendering) + Vercel (as platform)"}
                title2={"You can find the source-code of this website at: "}
            />
        </div>
    )
}

export async function getServerSideProps(context) {
    const data = await fetch(`${process.env.API_URL}/api/getUser`)
    const { repo, me } = await data.json()

    return {
        props: {
            repos: repo,
            myGit : me
        }
    }
}

export default Index