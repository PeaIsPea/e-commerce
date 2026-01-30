import MyButton from "@components/Button/Button";
import styles from "./styles.module.scss"


function Banner() {

  const { containerBanner, contentBanner, titleBanner, desBanner } = styles;
  return ( 
    <div className={containerBanner}>
      <div className={contentBanner}>
        <h1 className={titleBanner}>URBAN MINIMALISML</h1>
        <div className={desBanner}>
          Elevate your wardrobe with timeless essentials.
        </div>

        <MyButton content={"SHOP COLLECTION"}/>
      </div>

      

      
    </div>
   );
}

export default Banner;