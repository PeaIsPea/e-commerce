import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from './const'
import Menu from "./Menu/Menu";
import styles from './styles.module.scss'
import Logo from '../../assets/Logo/LOGO.png'
import useScollHandling from "@/hooks/useScollHandling";
import { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import { SideBarContext } from "@/contexts/SideBarProvider";
import { GoGitCompare } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

function MyHeader() {

  const {container, containerHeader, containerBoxIcon, containerMenu, containerBox, fixedHeader, topHeader} = styles

  const { scollPos } = useScollHandling()
  const [fixedPos, setFixedPos] = useState(false)
  const {setIsOpen, setType} = useContext(SideBarContext)


  const handleIsOpenSideBar = (type) => {
    setIsOpen(true)
    setType(type)
  }

 

  
  useEffect(() => {

     setFixedPos(scollPos > 80)

  }, [scollPos])


  return (
    <div className={classNames(container, topHeader, {
      [fixedHeader] : fixedPos
    })}>
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {
              dataBoxIcon.map( (icon, index) => {
                return <BoxIcon key={index} type={icon.type} href={icon.href}/>
              })
            }
          </div>
          <div className={containerMenu}>
            {
              dataMenu.slice(0, 3).map( (data, index) => {
                return <Menu key={index} content={data.content} href={data.href}/>
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
              dataMenu.slice(3, dataMenu.length).map( (data, index) => {
                return <Menu key={index} content={data.content} href={data.href} setIsOpen={setIsOpen}/>
              })
            }
          </div>
          <div className={containerBoxIcon}>
            <GoGitCompare style={{
              fontSize: '25px'
              }}
              onClick={() => handleIsOpenSideBar('compare')}
            />
            <IoMdHeartEmpty style={{
              fontSize: '25px'
              }}
              onClick={() => handleIsOpenSideBar('wishlist')}
            />

            <IoCartOutline style={{
              fontSize: '25px'
              }}
              onClick={() => handleIsOpenSideBar('cart')}
            />

            
            
            
          </div>
        </div>
      </div>
    </div>
   );
}

export default MyHeader;