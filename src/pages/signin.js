import React,{useState} from 'react'
import Signin from '../components/Signin'








const SigninPage = () => {
  const{show,setShow}=useState(false)
    return (
        <div>
          {show&& <Signin/>}
         
        </div>
    )
}

export default SigninPage
