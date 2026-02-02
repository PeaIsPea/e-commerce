import styles from './styles.module.scss'
import { IoCartOutline } from "react-icons/io5";
import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSidebar';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import MyButton from '@components/Button/Button';

function Cart() {
  const {container, boxTotal, boxBtn} = styles
  return ( 
    <div className={container}>
      <div>
        <HeaderSideBar icon={<IoCartOutline style={{
        fontSize: '30px'
        }}/>} title={"CART"}/>

        <ItemProduct />
      </div>

      <div>
        <div className={boxTotal}>
          <p>SUB TOTAL:</p>
          <p>$199.99</p>
        </div>

        <div className={boxBtn}>
          <MyButton variant='btn1' content={'VIEW CART'} />
          <MyButton variant='btn1_1' content={'CHECKOUT'} />
        </div>
      </div>
    </div>
   );
}

export default Cart;