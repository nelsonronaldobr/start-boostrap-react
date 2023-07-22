import style from '../css-modules/Header.module.css';

export const IconHamburger = ({ toggleMenu }) => {
    return (
        <div className={style['hamburger-menu']} onClick={toggleMenu}>
            <i className='fa-solid fa-bars fa-xl'></i>
        </div>
    );
};
