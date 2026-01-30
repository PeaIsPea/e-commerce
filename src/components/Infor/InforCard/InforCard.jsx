import styles from '../styles.module.scss'

function InforCard({ title, des , src }) {

  const {containerCard, containerContentCard, titleCard, desCard} = styles
  return ( 
    <div className={containerCard}>
      <img src={src} width={40} height={40} alt="CarIcon" />

      <div className={containerContentCard}>
        <div className={titleCard}>{title}</div>
        <div className={desCard}>{des}</div>
      </div>
    </div> 
  );
}

export default InforCard;