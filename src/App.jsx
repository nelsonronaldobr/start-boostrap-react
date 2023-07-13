import { Footer, Header, Main } from './components';
import { SectionMain } from './components/sections';

export const App = () => {
    return (
        <>
            <Header />
            <Main>
                <SectionMain />
            </Main>
            <Footer />
        </>
    );
};
