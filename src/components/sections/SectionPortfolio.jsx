import { Title } from '../Title';
import { Container } from '../Container';
import { IconStart } from '../IconStarts';

import cabin from '../../assets/images/cabin.png';
import cake from '../../assets/images/cake.png';
import circus from '../../assets/images/circus.png';
import game from '../../assets/images/game.png';
import safe from '../../assets/images/safe.png';
import submarine from '../../assets/images/submarine.png';
import style from '../../css-modules/SectionPortfolio.module.css';

export const SectionPortfolio = ({ id }) => {
    return (
        <div id={id} className={style['section-portfolio__background']}> 
            <Container >
                <section className={style['section-portfolio']} >
                    <Title className={style['section-contact__title']} >PORTFOLIO</Title>
                    <IconStart color={'black'} className={'start-icon__black'}/>
                    <div>
                    <img src={cabin}/>
                    <img src={cake}/>
                    <img src={circus}/>
                    <img src={game}/>
                    <img src={safe}/>
                    <img src={submarine}/>
                    </div>
                </section>
            </Container>
        </div>
    );
};
