import { FC } from 'react'
import styles from './Paragraf.module.css'

const Paragraf: FC = () => {
    return(
        <div className={styles.paragraf_container}>
            <div className={styles.paragraf_content}>
                <div className={styles.paragraf}>
                    <h2>Поможем тебе понять любой предмет и объясним все сложное простыми словами</h2>
                </div>
            </div>
        </div>      
    )
}

export default Paragraf