import { FooterContainer, Copy } from './foot-parts';

import style from '../css-modules/Footers.module.css';
// import styles from '../css-modules/Header.module.css';
export const Footer = () => {
    return (
        <footer className={style.footer}>
            <FooterContainer />
            <Copy/>
        </footer>
    );
};
