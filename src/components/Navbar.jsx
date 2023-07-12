export const Navbar = () => {
    return (
        <nav className='header__nav'>
            <ul className='header__nav-list'>
                <li className='header__nav-item'>
                    <a href='#portafolio' className='header__nav-link'>
                        PORTAFOLIO
                    </a>
                </li>
                <li className='header__nav-item'>
                    <a href='#about' className='header__nav-link'>
                        ABOUT
                    </a>
                </li>
                <li className='header__nav-item'>
                    <a href='#contact' className='header__nav-link'>
                        CONTACT
                    </a>
                </li>
            </ul>
        </nav>
    );
};
