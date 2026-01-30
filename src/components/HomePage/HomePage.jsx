import MyHeader from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import styles from "./styles.module.scss"
import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading';
import Infor from '@components/Infor/Infor';
import HeadingListProducts from '@components/HeadingListProducts/HeadingListProducts';
import { useEffect, useState } from 'react';
import { getProducts } from '@/apis/productsServer'
import PopularProd from '@components/PopularProd/PopularProd';
function HomePage() {

  const [listProd, setListProd] = useState([])


  useEffect(() => {
    getProducts()
      .then( res => setListProd(res.contents))

  }, [])

  console.log(listProd.slice(0,2))

  const {container} = styles;
  return ( 

    <div>
      <div className={container}>
        <MyHeader />
        <Banner />
        
        <Infor />
        <AdvanceHeading />
        <HeadingListProducts data={listProd.slice(0,2)}/>

        <PopularProd data={listProd.slice(2, listProd.length)}/>

        <div style={{ height: "200px" }}>

        </div>
        
      </div>
    </div>
   );
}

export default HomePage;