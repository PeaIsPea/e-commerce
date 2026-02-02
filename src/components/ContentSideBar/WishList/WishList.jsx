import styles from './styles.module.scss'
import { IoMdHeartEmpty } from "react-icons/io";
import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSidebar';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import MyButton from '@components/Button/Button';


function WishList() {

  const {container, boxBtn} = styles
  return ( 
    <div className={container}>
      <div>
        <HeaderSideBar icon={<IoMdHeartEmpty style={{
          fontSize: '30px'
        }}/>} title={"WISHLIST"}/>

        <ItemProduct />
      </div>

      <div className={boxBtn}>
        <MyButton variant='btn1' content={'VIEW WISHLIST'} />
        <MyButton variant='btn1_1' content={'ADD ALL TO CART'} />
      </div>
    </div>
   );
}

export default WishList;