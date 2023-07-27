import { Container } from '../Container';
import { Title } from '../Title';
import { IconStart } from '../IconStarts';
import style from '../../css-modules/SectionContact.module.css'
export const SectionContact = ({ id }) => {
    return (
        <div id={id} >
            <Container className={style['section-contact__background']}>
                <section className={style['section-contact']}>
                    <Title className={style['section-contact__title']}>CONTACT ME</Title>
                    <IconStart className={'start-icon__black'} color={'black'}/>
                </section> 
            </Container>
        </div>
    );
};
