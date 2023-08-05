import { NextPage } from 'next'
import Layout from './components/layout/Layout'
import Link from 'next/link'
import Head from 'next/head'

const NotFound: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Not Found</title>
            </Head>
            <div>
                <h1>404</h1>
                <Link href='/'>Перейти на главную</Link>
            </div>
        </Layout>
    )
}

export default NotFound
