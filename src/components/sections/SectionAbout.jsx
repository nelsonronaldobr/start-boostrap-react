import { Container } from '../Container';
import { Title } from '../Title';
import style from '../../css-modules/SectionAbout.module.css'
export const SectionAbout = ({ id }) => {
    return (
        <div id={id} className={style['section-about']}>
            <Container>
                <section>
                    <Title >ABOUT</Title>
                </section>
            </Container>
        </div>
    );
};
