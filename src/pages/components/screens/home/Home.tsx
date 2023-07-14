import { FC } from 'react'
import Layout from '@/pages/components/layout/Layout'
import Image from 'next/image'
import styles from './Home.module.css'
import MainBlock from './Block/MainBlock'


const Home: FC = () => {
    return (
      <Layout title='Онлайн-школа «Дом знаний» | 1 по 11 класс | Выдача госаттестата' description='Онлайн-школа: домашнее обучение, дистанционное образование для детей с 1 по 11 класс с получением аттестата в интернет-школе «Дом Знаний». Российский государственный диплом для школьников. Доступные цены. Звоните!'>
        <main className={styles.main}>
          <MainBlock />
        </main>
      </Layout>
    )
}

export default Home