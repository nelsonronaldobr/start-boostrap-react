import { Container } from '../Container';
import { Title } from '../Title';

export const SectionAbout = ({ id }) => {
    return (
        <div id={id}>
            <Container>
                <section>
                    <Title>ABOUT</Title>
                </section>
            </Container>
        </div>
    );
};
