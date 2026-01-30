import MainLayout from "@components/Layout/Layout";
import styles from "./styles.module.scss";
import ProductsItem from "@components/ProductsItem/ProductsItem";

function PopularProd({ data }) {

  const { container } = styles;
  return ( 
    <>
      <MainLayout>
        <div className={container}>
          {data.map((item) => (
            <ProductsItem key={item._id} 
            src={item.images[0]}
            prevSrc={item.images[1]}
            name={item.name}
            price={item.price}
            />
          ))}
        </div>
      </MainLayout>
    </>
   );
}

export default PopularProd;