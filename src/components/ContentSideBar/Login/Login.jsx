import InputCommon from "@components/InputCommon/InputCommon";
import styles from './styles.module.scss'
import MyButton from "@components/Button/Button";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { useContext, useState } from "react";
import { ToastContext } from "@/contexts/ToastProvider";

function Login() {


  const {container, title, checkboxRemember, lostpass} = styles

  const [isRes, setIsRes] = useState(false)

  const {toast} = useContext(ToastContext)


  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 chacracters').required('Password is required'),
      cfmpassword: Yup.string().oneOf(
        [Yup.ref('password'), null], 'Passwords are not match')
    }),
    onSubmit: (values) => {
      console.log(values)
    }

  })

  const handleToggle = () => {
    setIsRes(!isRes)
    formik.resetForm()
  }



  return ( 
    <div className={container}>
      <div className={title}>{isRes ? 'SIGN UP' : 'SIGN IN'}</div>

      <form onSubmit={formik.handleSubmit}>
        <InputCommon 
          id='email' 
          label='Username or email' 
          type='text' 
          isRequired
          
          formik={formik}
        />
        

        <InputCommon 
          id='password' 
          label='Password' 
          type='password' 
          isRequired
          
          formik={formik}
        />



        {isRes && (
          <InputCommon 
          id='cfmpassword' 
          label='Confirm Password' 
          type='password' 
          isRequired
          
          formik={formik}
          />
        )}
        

        {!isRes && (
          <div className={checkboxRemember}>
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
        )}

        <div className={title}>
          <MyButton variant="btn" content={ isRes ? "REGISTER":"LOGIN"} 
          type='submit'
          onClick={() => toast.success('Success')}
          
          />
        </div>
      </form>

      <div className={title}>
        <MyButton variant="btn1_1" 
        content={isRes ? "Already hava an accout?": "Dont't have an accout"} 
        type='submit'
        style={{ marginTop: '10px'}}
        onClick={handleToggle}
        />
      </div>
      


      <div className={lostpass}>{!isRes && 'Lost your password?'}</div>
      
    </div>
   );
}

export default Login;