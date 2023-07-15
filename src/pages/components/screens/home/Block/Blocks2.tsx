import { FC } from 'react'
import styles from './styles/Blocks2.module.css'

const Blocks2: FC = () => {
    return(
        <div className={styles.js1_container}>
            <div className={styles.js1_content}>
                <div className={styles.jss1}>
                    <p>Уроки, которые не дадут заскучать</p>
                </div>
                <div className={styles.jss2}>
                    <p>Живые уроки в группах до 8 человек</p>
                </div>
                <div className={styles.jss3}>
                <p>Учиться онлайн намного удобнее</p>
                </div>
            </div>
        </div>      
    )
}

export default Blocks2