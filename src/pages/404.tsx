import { NextPage } from 'next'
import Layout from './components/layout/Layout'
import Link from 'next/link'

const NotFound: NextPage = () => {
    return (
        <Layout title='Not Found'>
            <div>
                <h1>404</h1>
                <Link href='/'>Перейти на главную</Link>
            </div>
        </Layout>
    ) 
}

export default NotFound