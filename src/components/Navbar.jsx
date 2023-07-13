import style from '../css-modules/Header.module.css';
import { Logo } from './Logo';

export const Navbar = () => {
    return (
        <nav className={`${style.header__nav} container`}>
            <Logo />
            <ul className={style['header__nav-list']}>
                <li className={style['header__nav-item']}>
                    <a href='#portafolio' className={style['header__nav-link']}>
                        PORTAFOLIO
                    </a>
                </li>
                <li className={style['header__nav-item']}>
                    <a href='#about' className={style['header__nav-link']}>
                        ABOUT
                    </a>
                </li>
                <li className={style['header__nav-item']}>
                    <a href='#contact' className={style['header__nav-link']}>
                        CONTACT
                    </a>
                </li>
            </ul>
        </nav>
    );
};
