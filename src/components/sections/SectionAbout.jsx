import { Container } from '../Container';
import { Title } from '../Title';
import { IconStart } from '../IconStarts';
import style from '../../css-modules/SectionAbout.module.css'
export const SectionAbout = ({ id }) => {
    return (
        <div id={id} className={style['section-about__background']}>
            <Container>
                <section  className={style['section-about']}>
                    <Title className={style['section-about__title'] }>ABOUT</Title>
                    <IconStart color={'white'} className={'start-icon__white'}/>
                </section>
            </Container>
        </div>
    );
};
