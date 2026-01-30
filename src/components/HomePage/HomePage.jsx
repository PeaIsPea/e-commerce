import MyHeader from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import styles from "./styles.module.scss"
import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading';
import Infor from '@components/Infor/Infor';
import HeadingListProducts from '@components/HeadingListProducts/HeadingListProducts';
function HomePage() {

  const {container} = styles;
  return ( 

    <div>
      <div className={container}>
        <MyHeader />
        <Banner />
        
        <Infor />
        <AdvanceHeading />
        <HeadingListProducts />
        
      </div>
    </div>
   );
}

export default HomePage;