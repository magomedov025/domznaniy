import { FC } from 'react'
import styles from './styles/Block4.module.css'
import Image from 'next/image';
import imgSrc from '@/../public/img/image4.png';

const Blocks4: FC = () => {
    return(
        <div className={styles.container}>
            <div className={styles.container_content}>
                <div className={styles.container_options}>
                    <div className={styles.title_container}>
                        <h2>Проведи лето увлекательно и с пользой</h2>
                    </div>
                    <div className={styles.text_container}>
                        <p>Бесплатный онлайн-лагерь Camp House от “Дома знаний”</p>
                    </div>
                    <div className={styles.button}>
                        <a href="/">Подробнее</a>
                    </div>
                </div>
                    <Image src={imgSrc} alt="" role="presentation" />
            </div>
        </div> 
    )
}

export default Blocks4