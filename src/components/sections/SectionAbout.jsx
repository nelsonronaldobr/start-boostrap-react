import { Container } from '../Container';
import { Title } from '../Title';
import { IconStart } from '../IconStarts';
import style from '../../css-modules/SectionAbout.module.css';
export const SectionAbout = ({ id }) => {
    return (
        <div id={id} className={style['section-about__background']}>
            <Container>
                <section className={style['section-about']}>
                    <Title className={style['section-about__title']}>
                        ABOUT
                    </Title>
                    <IconStart
                        color={'white'}
                        className={'start-icon__white'}
                    />
                    <div className={style['section-about__text']}>
                        <p>
                            Frelancer is a free boostrap theme created by Start
                            Boostrap. The download includes the complete source
                            files including HTML, CSS, and JavaScript as well as
                            optional LESS stylesheets for easy customization.
                        </p>
                        <p>
                            Whether you're a student looking to showcase your
                            work, a professional looking to attract clients, or
                            a graphic artist looking to share your projects,
                            this template is the starting point!
                        </p>
                    </div>
                    <button className={style.button}>
                        <span className={style.icon}>
                            <i className='fa fa-download'></i>
                        </span>
                        Download Theme
                    </button>
                </section>
            </Container>
        </div>
    );
};
