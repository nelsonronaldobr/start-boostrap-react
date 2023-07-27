
import style from '../css-modules/IconStart.module.css'
export const IconStart = ({color}) => {
  return (
    <div className={`${style['start-icon']} ${style[color]}`}>
    <i className='fa-solid fa-star fa-2xl'></i>
</div>
  )
}
