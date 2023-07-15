import { FC } from 'react'
import Layout from '@/pages/components/layout/Layout'
import Image from 'next/image'
import styles from './Home.module.css'
import MainBlock from './Block/MainBlock'
import Head from 'next/head'
import Paragraf from './Paragraph/Paragraf'
import Blocks2 from './Block/Blocks2'


const Home: FC = () => {
    return (
      <Layout>
        <Head>
          <title>Онлайн-школа «Дом знаний» | 1 по 11 класс | Выдача госаттестата</title>
        </Head>
        <main className={styles.main}>
          <MainBlock />
          <Paragraf />
          <Blocks2 />
        </main>
      </Layout>
    )
}

export default Home