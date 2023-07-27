import { Title } from '../Title';
import { Container } from '../Container';
import { IconStart } from '../IconStarts';
import style from '../../css-modules/SectionPortfolio.module.css';
export const SectionPortfolio = ({ id }) => {
    return (
        <div id={id} className={style['section-portfolio']}> 
            <Container >
                <section  >
                    <Title className={style['section-contact__title']} >PORTFOLIO</Title>
                    <IconStart color={'black'}/>
                </section>
            </Container>
        </div>
    );
};
