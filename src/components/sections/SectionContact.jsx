import { Container } from '../Container';
import { Title } from '../Title';
import { IconStart } from '../IconStarts';
import style from '../../css-modules/SectionContact.module.css'
export const SectionContact = ({ id }) => {
    return (
        <div id={id} className={style['section-contact']}>
            <Container>
                <section>
                    <Title className={style['section-contact__title']}>CONTACT</Title>
                    <IconStart color={'black'}/>
                </section> 
            </Container>
        </div>
    );
};
