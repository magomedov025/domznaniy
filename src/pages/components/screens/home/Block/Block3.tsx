import { FC } from 'react'
import styles from './styles/Block3.module.css'

const Blocks3: FC = () => {
    return(
        <div className={styles.jss1}>
            <div className={styles.jsss3_container}>
                <div className={styles.jsss4}>
                    <h3>Материнский капитал</h3>
                    <p>Узнайте о возможности оплаты обучения материнским капиталом</p>
                </div>
                <div className={styles.jsss5}>
                    <h3>Социальные льготы</h3>
                    <p>О преимуществах, позволяющих оплатить часть или 100% обучения</p>
                </div>
            </div>
        </div>    
    )
}

export default Blocks3