import style from '../../css-modules/Footers.module.css'

export const About = () => {
    return (
        <div className= {style['footer-divs']}>
            <h1 className={style['footer-title']}>ABOUT FREELANCER </h1>
            <p>
                Freelance is a free to use, open source Booststrap theme created
                by <span className='footer-text__green'>Start Boostrap</span> .
            </p>
        </div>
    );
};
