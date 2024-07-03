
import menuIcon from '../../assets/menu_icon_samps.svg'
import logoImg from '../../assets/samps.svg'
import styles from './styles.modules.css'


export default function Header(){{
    return(
        <div className={style.header}>
            
            <img className={style.logo} src={logoImg} alt='Logo Corretora'/>
            <img className={style.menuIcon} src={menuIcon} alt="Scrolling Menu" />
        </div>
        )
}}