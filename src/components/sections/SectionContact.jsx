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

                    <div className={style.container}>
                        <form className={style['section-contact__form']}>
                            <input
                                type='text'
                                className={style['input-field']}
                                placeholder='Name'
                            />
                            <input
                                type='text'
                                className={style['input-field']}
                                placeholder='Email Address'
                            />
                            <input
                                type='text'
                                className={style['input-field']}
                                placeholder='Phone Number'
                            />
                            <textarea
                                type='text'
                                className={style['input-field']}
                                placeholder='Message'
                                rows='4'
                                cols='50'></textarea>
                            <button className={style['button-line']}>
                                Send
                            </button>
                        </form>
                    </div>
                </section>
            </Container>
        </div>
    );
};
