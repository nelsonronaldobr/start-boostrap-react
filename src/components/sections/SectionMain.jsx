import profile from '../../assets/images/profile.png';
import style from '../../css-modules/SectionMain.module.css';
import { Container } from '..';
export const SectionMain = () => {
    return (
        <div className={style['section-main__container']}>
            <Container>
                <section className={`${style['section-main']}`}>
                    <picture className={style['section-main__picture']}>
                        <img
                            src={profile}
                            className={style['section-main__image']}
                        />
                    </picture>
                    <p className={style['section-main__title']}>
                        START BOOSTRAP
                    </p>
                    <div className='star-icon'>
                        <i className='fa-solid fa-star fa-2xl'></i>
                    </div>
                    <p className={style['section-main__description']}>
                        Web Developer - Graphic Artist - User Experience
                        Designer
                    </p>
                </section>
            </Container>
        </div>
    );
};
