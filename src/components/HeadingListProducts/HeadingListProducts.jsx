import MainLayout from "@components/Layout/Layout";
import styles from "./styles.module.scss"
import CountDownBanner from "@components/CountDownBanner/CountDownBanner";
import ProductsItem from "@components/ProductsItem/ProductsItem";

function HeadingListProducts({ data }) {
  
  const { container, containerItem } = styles


  
  return ( 
    
    <MainLayout>
      <div className={container}>
        <CountDownBanner />
        <div className={containerItem}>
          {data.map((item) => (
            <ProductsItem key={item._id} 
            src={item.images[0]}
            prevSrc={item.images[1]}
            name={item.name}
            price={item.price}
            />
          ))}

          
          
        </div>
      </div>
    </MainLayout>
   );
}

export default HeadingListProducts;