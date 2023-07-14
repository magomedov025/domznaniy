import { NextPage } from 'next'
import Layout from './components/layout/Layout'
import Head from 'next/head'

const AboutPage: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>About</title>
            </Head>
            <div>Hello</div>
        </Layout>
    )
}

export default AboutPage