import { Footer, Header, Main } from './components';
import { SectionMain } from './components/sections';
import { SectionPortfolio } from './components/sections';
export const App = () => {
    return (
        <>
            <Header />
            <Main>
                <SectionMain />
                <SectionPortfolio/>
            </Main>
            <Footer />
        </>
    );
};
