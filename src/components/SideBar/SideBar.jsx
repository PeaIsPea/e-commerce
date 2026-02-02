import { useContext } from 'react';
import styles from './styles.module.scss'
import { SideBarContext } from '@/contexts/SidebarProvider';
import { MdClose } from "react-icons/md";

import classNames from 'classnames';
import Login from '@components/ContentSideBar/Login/Login';
import Compare from '@components/ContentSideBar/Compare/Compare';
import WishList from '@components/ContentSideBar/WishList/WishList';
import Cart from '@components/ContentSideBar/Cart/Cart';



function SideBar() {

  const {containerSideBar, overplay, sidebar, slideSideBar, boxIcon} = styles

  const {isopen, setIsOpen, type} = useContext(SideBarContext)

  const handleRenderContent = () => {
    switch (type) {
      case 'login':

        return <Login />
      case 'compare':
        return <Compare />

      case 'wishlist':
        return <WishList />

      case 'cart':
        return <Cart />
    

      default:
        return <Login />
    }
  }


  const handleToggle = () => {
    setIsOpen(!isopen)
  }

  return ( 
    <div className={containerSideBar}>
      <div onClick={handleToggle} className={classNames({
        [overplay] :isopen
      })}></div>
      <div className={classNames(sidebar, {
        [slideSideBar]: isopen
      })}>

        {isopen && (
          <div className={boxIcon} onClick={handleToggle}>
            <MdClose />
          </div>
        )}
        
        {handleRenderContent()}
      </div>
    </div>
   );
}

export default SideBar;