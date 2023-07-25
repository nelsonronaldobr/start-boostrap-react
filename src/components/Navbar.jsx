import style from '../css-modules/Header.module.css';
import { Logo, IconHamburger, Container } from '.';
import { useState } from 'react';

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <Container>
            <nav className={`${style.header__nav}`}>
                <Logo />
                <IconHamburger toggleMenu={toggleMenu} />

                <ul
                    className={`${style['header__nav-list']} ${
                        open ? style['menu-active'] : ''
                    }`}>
                    <li className={style['header__nav-item']}>
                        <a
                            href='#portafolio'
                            className={style['header__nav-link']}>
                            PORTAFOLIO
                        </a>
                    </li>
                    <li className={style['header__nav-item']}>
                        <a href='#about' className={style['header__nav-link']}>
                            ABOUT
                        </a>
                    </li>
                    <li className={style['header__nav-item']}>
                        <a
                            href='#contact'
                            className={style['header__nav-link']}>
                            CONTACT
                        </a>
                    </li>
                </ul>
            </nav>
        </Container>
    );
};
