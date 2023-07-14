import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Header.module.css'
import Navbar from './navbar/Navbar'


const Header: FC = () => {

    const { pathname } = useRouter()

    return  <header className={styles.header}>
                <Navbar />
            </header>
            
}

export default Header