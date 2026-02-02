
import styles from './styles.module.scss';
import { IoCloseOutline } from "react-icons/io5";


function ItemProduct() {

  const {container, boxContent, boxTitle, boxPrice, boxClose, boxSize} = styles
  return ( 
    <div className={container}>
      <img src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min.jpg" alt="prod" />

      <div className={boxClose}>
        <IoCloseOutline style={{
          fontSize: '20px',
          color: '#5b4b4b'
        }}/>
      </div>

      <div className={boxContent}>
        <div className={boxTitle}>title of prod</div>
        <div className={boxSize}>Size:L</div>
        <div className={boxPrice}>$100</div>
        <div className={boxPrice}>SKU: 1223124</div>
      </div>
    </div>

   
   );
}

export default ItemProduct;