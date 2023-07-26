import { Footer, Header, Main } from './components';
import {
    SectionMain,
    SectionAbout,
    SectionPortfolio,
    SectionContact
} from './components/sections';

export const App = () => {
    return (
        <>
            <Header />
            <Main>
                <SectionMain />
                <SectionPortfolio id={'portafolio'} />
                <SectionAbout id={'about'} />
                <SectionContact id={'contact'} />
            </Main>
            <Footer />
        </>
    );
};
