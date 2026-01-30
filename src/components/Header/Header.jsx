import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from './const'
import Menu from "./Menu/Menu";
import styles from './styles.module.scss'
import Logo from '../../assets/Logo/LOGO.png'
import reLoadIcon from '@icons/svgs/rotate.svg'
import cartIcon from '@icons/svgs/cart.svg'
import heartIcon from '@icons/svgs/heart.svg'

function MyHeader() {

  const {container, containerHeader, containerBoxIcon, containerMenu, containerBox} = styles


  return (
    <div className={container}>
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {
              dataBoxIcon.map( (icon) => {
                return <BoxIcon type={icon.type} href={icon.href}/>
              })
            }
          </div>
          <div className={containerMenu}>
            {
              dataMenu.slice(0, 3).map( (data) => {
                return <Menu content={data.content} href={data.href}/>
              })
            }
          </div>
          
        </div>
        <div>
          {/* <img src={Logo} alt="logo" style={{ width:"153px", height: "75px"}}/> */}
        </div>
        <div className={containerBox}>
          <div className={containerMenu}>
            {
              dataMenu.slice(3, dataMenu.length).map( (data) => {
                return <Menu content={data.content} href={data.href}/>
              })
            }
          </div>
          <div className={containerBoxIcon}>
            <img width={26} height={26} src={reLoadIcon} alt="reload" />
            
            <img width={26} height={26} src={heartIcon} alt="heart" />

            <img width={26} height={26} src={cartIcon} alt="carts" />
          </div>
        </div>
      </div>
    </div>
   );
}

export default MyHeader;