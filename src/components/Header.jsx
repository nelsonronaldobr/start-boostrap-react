import { Navbar } from '.';
import style from '../css-modules/Header.module.css';

export const Header = () => {
    return (
        <header className={style.header}>
            <Navbar />
        </header>
    );
};
