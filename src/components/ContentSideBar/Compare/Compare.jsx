import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSidebar';
import { GoGitCompare } from "react-icons/go";
import styles from './styles.module.scss'
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import MyButton from '@components/Button/Button';

function Compare() {

  const {container} = styles
  return ( 
    <div className={container}>
      <div>
        <HeaderSideBar icon={<GoGitCompare style={{
        fontSize: '30px'
        }}/>} title={"COMPARE"}/>

        <ItemProduct />
      </div>
      

      <div>
        <MyButton content={"VIEW COMPARE"} variant='btn1'/>
      </div>
    </div>
   );
}

export default Compare;