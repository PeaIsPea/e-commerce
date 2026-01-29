import styles from '../styles.module.scss'
import fbIcon from '@icons/svgs/fbicon.svg'
import igIcon from '@icons/svgs/igicon.svg'
import ytIcon from '@icons/svgs/yticon.svg'


function BoxIcon({ type, href }) {
  const { boxIcon } = styles

  const handleRenderIcon = (type) => {
    switch(type) {
      case 'fb':
        return fbIcon
      case 'ig':
        return igIcon
      case 'yt':
        return ytIcon
    }
  }

  return (
    <div className={boxIcon}>
      <img src={handleRenderIcon(type)} alt={href} />
    </div>
  )
  
}

export default BoxIcon;