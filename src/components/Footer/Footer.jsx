import { dataMenu } from "@components/Footer/const";
import styles from "./styles.module.scss"


function Footer() {
  const {container, boxNav} = styles
  return ( 
    <div className={container}>
      <div>
        <img src="https://www.evoi.ru.com/wp-content/uploads/2025/10/logo-8xbet-com-300x113.png" alt="" width={160} height={55} />
      </div>

      <div className={boxNav}>
        {dataMenu.map((item) => (
          <div>{item.content}</div>
        ))}
      </div>

      <div>
        <p style={{textAlign: "center"}}>Guaranted safe checkout</p>
        <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png" alt="" style={{cursor: "pointer"}}/>
      </div>

      <div style={{
        textAlign: "center",
        marginTop: "20px"
      }}>
        Copyright © 2026 MinTea Shop. Created by Pea – WooCommerce themes.
      </div>
    </div>
   );
}

export default Footer;