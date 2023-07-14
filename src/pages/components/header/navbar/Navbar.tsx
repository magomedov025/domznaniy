import { FC } from 'react'
import Link from "next/link";
import { useRouter } from 'next/router'
import styles from '../navbar/Navbar.module.css'


const Navbar: FC = () => {
    const { pathname } = useRouter()

    const toggleMenu = () => {
        const nav = document.querySelector('.navigation')
        const burger = document.querySelector('.burger_menu')
        const buttonHeader = document.querySelector('.button_header')
        if (burger){
            burger.classList.toggle('open')
        }
        if (nav){
            nav.classList.toggle('active')
        }
        if (buttonHeader){
            buttonHeader.classList.toggle('active')
        }
      }
      
    return( <div className={styles.header_container}>
                <div className='container_header'>
                    <div className='logo_header'>
                    <Link href="/">
                        <img 
                            src='../img/logo.svg'
                            width="170"
                            className='d-inline-block align-top'
                            alt='Logo'
                        />
                    </Link>
                    </div>
                    <div className="navigation">
                        <nav className={styles.navigation}>
                            <Link href="/" className={pathname === '/' ? styles.active : ''} > Главная </Link>
                            <Link href="/about" className={pathname === '/about' ? styles.active : ''} > О нас </Link>
                            <Link href="/price" > Стоимость </Link>
                            <Link href="/student" > Ученикам </Link>
                            <Link href="/parent" > Родителям </Link>
                            <Link href="tel:78006007568" > 8 (800) 600 75 68 </Link>
                        </nav>
                    </div>
                    <div className='button_header'>
                        <Link href="/"> Бесплатная пробная неделя </Link>
                        <Link href="/"> Войти </Link>
                    </div>
                    <div className='burger_menu' onClick={toggleMenu}>
                        <span className='line'></span>
                        <span className='line'></span>
                        <span className='line'></span>
                    </div>
                </div>
            </div>
      
    )
}

export default Navbar
