import { FC } from 'react'
import styles from './styles/MainBlock.module.css'

const MainBlock: FC = () => {
    return( 
        <div className={styles.main_Block}>
            <div className={styles.main_block_content}>
                <div className={styles.left_main_block_content}>
                    <h1 className={styles.h1}>Онлайн-школа "Дом Знаний"</h1>
                    <div className={styles.advantages_main_block}>
                        <div className={styles.option_advantages_main_block}>
                            <img className={styles.image_advantages} src="img/icon.svg" alt="" />
                            <p className={styles.paragraf_main}>Аттестат государственного образца</p>
                        </div>
                        <div className={styles.option_advantages_main_block}>
                            <img className={styles.image_advantages} src="img/icon2.svg" alt="" />
                            <p className={styles.paragraf_main}>Живые видео-встречи с учителями</p>
                        </div>
                        <div className={styles.option_advantages_main_block}>
                            <img className={styles.image_advantages} src="img/icon3.svg" alt="" />
                            <p className={styles.paragraf_main}>Классы по 2-8 учеников</p>
                        </div>
                        <div className={styles.option_advantages_main_block}>
                            <img className={styles.image_advantages} src="img/icon4.svg" alt="" />
                            <p className={styles.paragraf_main}>Индивидуальные занятия и расписание</p>
                        </div>
                    </div>
                    <div className={styles.button_education_main_block}>
                        <a className={styles.button_education_click} href=''>Начать бесплатно</a>
                    </div>
                    <div className={styles.right_main_block_content}>
                        <img className={styles.image_main_block} src='img/students.png' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBlock
