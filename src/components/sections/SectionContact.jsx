import { Container } from '../Container';
import { Title } from '../Title';
import { IconStart } from '../IconStarts';
import style from '../../css-modules/SectionContact.module.css';
export const SectionContact = ({ id }) => {
    return (
        <div id={id}>
            <Container className={style['section-contact__background']}>
                <section className={style['section-contact']}>
                    <Title className={style['section-contact__title']}>
                        CONTACT ME
                    </Title>
                    <IconStart
                        className={'start-icon__black'}
                        color={'black'}
                    />
                    <form className={`${style['section-contact__form']} ${style['container']}`}>
                        <input
                            type='text'
                            className='input-field'
                            placeholder='Name'
                        />
                        <input
                            type='text'
                            className='input-field'
                            placeholder='Email Address'
                        />
                        <input
                            type='text'
                            className='input-field'
                            placeholder='Phone Number'
                        />
                        <input
                            type='text'
                            className='input-field'
                            placeholder='Message'
                        />
                        <button className='button-line'>Send</button>
                    </form>
                </section>
            </Container>
        </div>
    );
};
