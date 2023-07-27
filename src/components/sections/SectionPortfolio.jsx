import { Title } from '../Title';
import { Container } from '../Container';
import { IconStart } from '../IconStarts';
import style from '../../css-modules/SectionPortfolio.module.css';
export const SectionPortfolio = ({ id }) => {
    return (
        <div id={id} className={style['section-portfolio__background']}> 
            <Container >
                <section className={style['section-portfolio']} >
                    <Title className={style['section-contact__title']} >PORTFOLIO</Title>
                    <IconStart color={'black'} className={'start-icon__black'}/>
                    <div>
                    <img/>
                    <img/>
                    <img/>
                    <img/>
                    <img/>
                    <img/>
                    </div>
                </section>
            </Container>
        </div>
    );
};
