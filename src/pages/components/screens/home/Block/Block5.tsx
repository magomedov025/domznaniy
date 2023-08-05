import { FC } from 'react'
import styles from './styles/Block5.module.css'
import Link from 'next/link'

const Blocks5: FC = () => {
    return(
        <div className={styles.education_video}>
            <div className={styles.education_body}>
                <div className={styles.tabs_education}>
                    <div className='video_tab'>
                        <Link className='tab1 active-click' href='#'>Видеоуроки</Link>
                    </div>
                    <div className='pres_tab'>
                        <Link className='tab2' href='#'>Презентация</Link>
                    </div>
                    <div className='test_tab'>
                        <Link className='tab3' href='#'>Тестирование</Link>
                    </div>
                    <div className='dz_tab'>
                        <Link className='tab4' href='#'>Домашняя работа</Link>
                    </div>
                    <div className='sopr_tab'>
                        <Link className='tab5' href='#'>Видеосопровождение</Link>
                    </div>
                </div>
                <div className={styles.video_tabs}>
                    <div className='videowr active' id='firstVideo'>
                        <video className={styles.lazy} webkit-playsinline playsInline loop autoPlay controls src='https://media.dznaniy.ru/uploads/1.mp4'></video>
                        <div className={styles.textVideoContent}>
                            <div className={styles.spanVideoContent}>
                                <span>Авторские уроки, разработанные нашими методистами и учителями соответствующие образовательным стандартам ФГОС</span>
                            </div>
                        </div>
                    </div>
                    <div className='videowr' id='secondVideo'>
                        <video className={styles.lazy} webkit-playsinline playsInline loop autoPlay controls src='https://media.dznaniy.ru/uploads/2.mp4'></video>
                        <div className={styles.textVideoContent}>
                            <div className={styles.spanVideoContent}>
                                <span>Уроки дублируются в текстовой презентации для удобства при повторении</span>
                            </div>
                        </div>
                    </div>
                    <div className='videowr' id='threeVideo'>
                        <video className={styles.lazy} webkit-playsinline playsInline loop autoPlay controls src='https://media.dznaniy.ru/uploads/3.mp4'></video>
                        <div className={styles.textVideoContent}>
                            <div className={styles.spanVideoContent}>
                                <span>Ещё до встречи с учителем можно проверить, как ребёнок усвоил материал</span>
                            </div>
                        </div>
                    </div>
                    <div className='videowr' id='thourVideo'>
                        <video className={styles.lazy} webkit-playsinline playsInline loop autoPlay controls src='https://media.dznaniy.ru/uploads/4.mp4'></video>
                        <div className={styles.textVideoContent}>
                            <div className={styles.spanVideoContent}>
                                <span>Домашнюю работу ученики делают на компьютере или в тетради и показывают выполненное задание в личном сообщении учителю</span>
                            </div>
                        </div>
                    </div>
                    <div className='videowr' id='fiveVideo'>
                        <video className={styles.lazy} webkit-playsinline playsInline loop autoPlay controls src='https://media.dznaniy.ru/uploads/5.mp4'></video>
                        <div className={styles.textVideoContent}>
                            <div className={styles.spanVideoContent}>
                                <span>Живая встреча с учителем по видеосвязи: обсуждение материала, возникших сложностей и выработка практического навыка.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blocks5