import styles from "./styles.module.scss"
import bagIcon from '@icons/svgs/bagicon.svg'
import reLoadIcon from '@icons/svgs/rotate.svg'
import heartIcon from '@icons/svgs/heart.svg'
import eyeIcon from '@icons/svgs/eyeicon.svg'


function ProductsItem({ src, prevSrc, name, price }) {



  const { boxImg, showImageHover, showFn, boxIcon, titleCard, priceCard } = styles;

  return ( 
    <div>
      <div className={boxImg}>
        <img src={src} alt={name} />

        <img src={prevSrc} alt={name} 
        className={showImageHover}
        />

        <div className={showFn}>
          <div className={boxIcon}>
            <img src={bagIcon} alt="1" />
          </div>

          <div className={boxIcon}>
            <img src={heartIcon} alt="1" />
          </div>

          <div className={boxIcon}>
            <img src={reLoadIcon} alt="1" />
          </div>

          <div className={boxIcon}>
            <img src={eyeIcon} alt="1" />
          </div>
        </div>

      </div>

      <div className={titleCard}>{name}</div>
      <div className={priceCard}>${price}</div>
    </div>
   );
}

export default ProductsItem;