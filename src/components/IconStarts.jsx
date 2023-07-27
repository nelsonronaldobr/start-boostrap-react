
import style from '../css-modules/IconStart.module.css'
export const IconStart = ({color,className}) => {
  return (
    <div className={`${style[className]} ${style[color]}`}>
    <i className='fa-solid fa-star fa-2xl'></i>
</div>
  )
}
