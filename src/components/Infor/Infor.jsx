import { dataInfor } from "@components/Infor/const";
import InforCard from "./InforCard/InforCard";
import MainLayout from "@components/Layout/Layout";
import styles from './styles.module.scss'

function Infor() {
  const {container} = styles
  return ( 
    <div>
      <MainLayout>
        <div className={container}>
          {dataInfor.map((item, index) => {
            return (
              <InforCard key={index} title={item.title} des={item.des} src={item.src}/>
            )
          })}
        </div>
      </MainLayout>
    </div>
   );
}

export default Infor;