import React from 'react';
import PageHead from '../components/PageHead'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Summary from '../components/ContentPage/Summary'
import WhatIdo from '../components/ContentPage/WhatIdo'
import Education from '../components/ContentPage/Education'
import Repositories from '../components/Repositories'
import getUser from '../utils/getUser'


const Index = (props) => {
    return(
        <div className="container mx-auto bg-network-left lg:bg-network-right">
            <PageHead />
            <Hero />
            <main>
                <Summary />
                <WhatIdo />
                <Education />
                <Repositories props={props} />
            </main>
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