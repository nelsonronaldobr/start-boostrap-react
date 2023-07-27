import { Container } from '../Container';
import { Title } from '../Title';
import style from '../../css-modules/SectionContact.module.css'
export const SectionContact = ({ id }) => {
    return (
        <div id={id} className={style['section-contact']}>
            <Container>
                <section>
                    <Title>CONTACT</Title>
                </section>
            </Container>
        </div>
    );
};
