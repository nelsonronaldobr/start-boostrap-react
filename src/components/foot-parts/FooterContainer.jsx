import { Location, About, Around } from '.';
import style from "../../css-modules/Footers.module.css";
export const FooterContainer = () => {
    return (
        <div className={style['footer-container']}>
            <Location />
            <Around />
            <About />
        </div>
    );
};
