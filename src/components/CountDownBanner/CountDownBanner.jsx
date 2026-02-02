import CountDownTimer from "@components/CountDownTimer/CountDownTimer";
import styles from "./styles.module.scss"
import MyButton from "@components/Button/Button";
function CountDownBanner() {
  const targetTime = '2026-12-31T00:00:00';
  const {container, containerTimer, title, boxBtn} = styles
  return ( 
    <div className={container}>
      <div className={containerTimer}>
        <CountDownTimer targetTime={targetTime}/>
        
      </div>
      <p className={title} style={{color: "black"}}>The classics make a comeback</p>
      <div className={boxBtn}>
        <MyButton variant="btn4" content={"Buy now"}/>
      </div>
    </div> 
  );
}

export default CountDownBanner;