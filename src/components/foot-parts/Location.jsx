import style from '../../css-modules/Footers.module.css'

export const Location = () => {
    return (
        <div className={style['footer-divs']}>
            <h1 className={style['footer-title']}>LOCATION </h1>
            <p>3481 Melrose Place Beverly Hills, CA 90210</p>
        </div>
    );
};
