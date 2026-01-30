import CountDownTimer from "@components/CountDownTimer/CountDownTimer";
import MainLayout from "@components/Layout/Layout";
import styles from "./styles.module.scss"
import CountDownBanner from "@components/CountDownBanner/CountDownBanner";

function HeadingListProducts() {
  
  const { container, containerItem } = styles


  const targetTime = "2026-12-31T00:00:00";
  return ( 
    
    <MainLayout>
      {/* <CountDownTimer targetTime={targetTime}/> */}
      <div className={container}>
        <CountDownBanner />
        <div className={containerItem}>
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </MainLayout>
   );
}

export default HeadingListProducts;