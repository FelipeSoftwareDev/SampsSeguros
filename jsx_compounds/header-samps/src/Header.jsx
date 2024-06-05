import style from './styles/HeaderStyles.css'
import menuIcon from './assets/menu_icon_samps.svg'
import logoImg from './assets/samps.svg'
import './styles/Globals.css'


export default function Header(){{
    return(
        <div className={style.header}>
            <img className={style.logo} src={logoImg} alt='Logo Corretora' width={20} />
            <img className={style.menuIcon} src={menuIcon} alt="Scrolling Menu" width="50rem" />
        </div>
        )
}}