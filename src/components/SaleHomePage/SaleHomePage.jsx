import MyButton from "@components/Button/Button";
import styles from "./styles.module.scss"


import useTranlateXImage from "@/Hooks/useTranlateXImage";



function SaleHomePage() {
  const {containerSalePage, title, desc, boxbtn, boxImg} = styles

  const {translateXpos} = useTranlateXImage()

  


  
  return ( 
    <div className={containerSalePage}>
      <div className={boxImg} style={{
        transform: `translateX(${translateXpos}px)`,
        transition: 'transform 0.6s ease'
      }}>
        <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg" alt="" />
      </div>
      <div>
        <h2 className={title}>Sale of the year</h2>

        <p className={desc}>Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.</p>

        <div className={boxbtn}>
          <MyButton variant="btn3" content={'Read more'}/>
        </div>
      </div>
      <div className={boxImg} style={{
        transform: `translateX(-${translateXpos}px)`,
        transition: 'transform 0.6s ease'
      }}>
        <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg" alt="" /></div>
    </div>
   );
}

export default SaleHomePage;