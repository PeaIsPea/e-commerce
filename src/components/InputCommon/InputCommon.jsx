
import { useState } from 'react';
import styles from './styles.module.scss'
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";


function InputCommon({ label, type, isRequired = false, ...props }) {

  const { container, labelInput, boxInput, iconEye, errorMess } = styles

  const {formik, id} = props

  const [showpass, setShowPass] = useState(true)
  const isShowTextPass = type === 'password' && showpass ? type : 'text'


  const handleShowPass = () => {
    setShowPass(!showpass)
  }


  const idError = formik.touched[id] && formik.errors[id]
  const errorMsg = formik.errors[id]
  const isPass = type === 'password'

  return ( 
    <div className={container}>
      <div className={labelInput}>{label} {isRequired && <span>*</span>}</div>
      <div className={boxInput}>
        <input 
          type={isShowTextPass} {...props}
          onBlur={formik.handleBlur} 
          onChange={formik.handleChange} 
          value={formik.values[id]}
        
        
        />

        {isPass && (
          <div className={iconEye} onClick={handleShowPass}>
            {showpass ? <FaRegEye  /> : <RiEyeCloseLine />}
          </div>
          
        )}
        {idError && <div className={errorMess}>{errorMsg}</div>}
        

        
        
      </div>
    </div>
   );
}

export default InputCommon;