import holu from '../../css-modules/Footers.module.css'

export const Around = () => {
    return (
        <div className={holu['footer-divs']}>
            <h1 className={holu['footer-title']}>AROUND THE WEB </h1>
            <div className={holu['footer-container__webs']}>
                <a href='#' target='_blank'>
                    <i className='fab fa-facebook white-icon'></i>
                </a>
                <a href='#' target='_blank'>
                    <i className='fab fa-google-plus-g white-icon'></i>
                </a>
                <a href='#' target='_blank'>
                    <i className='fab fa-twitter white-icon'></i>
                </a>
                <a href='#' target='_blank'>
                    <i className='fab fa-linkedin white-icon'></i>
                </a>
                <a href='#' target='_blank'>
                    <i className='fab fa-codepen white-icon'></i>
                </a>
            </div>
        </div>
    );
};
