import React from 'react'
import { Form, Input, Button, message } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { auth, db } from '../../firebase/Config';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './Login.css'
import Navbar from '../../components/navbar/Navbar';
import { collection, getDocs } from 'firebase/firestore';

const Login = () => {
    const navigate = useNavigate();

    const onFinish = (values) => {
        const {email, password} = values;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
      
                    getDocs(collection(db, "users")).then(querySnapshot => {
                        querySnapshot.forEach((doc) => {           
                                let useremail = doc.data().email;

                                if (useremail === user.email) {
                                    const useruid = user.uid;
                                    localStorage.setItem('currentuser', useruid)           
                                    navigate('/home')
                                } else {
                                    // message.error('user not exists'); 
                                }
                        })
                    }).catch((error) => {
                        const errorMessage = error.message;
                        message.error(errorMessage);
                    })
           
              
            })
            .catch((error) => {
                message.error(error);
            })
    };
    return (
       <> <Navbar /> <div className='login'>
       <Form name="normal_login" className="login-form" onFinish={onFinish} >
           <h1 className='heading-login' id='sign-heading-login'> Login to continue!   </h1> 
           <Form.Item name="email"
               rules={[
                   {
                       type: 'email',
                       message: 'The input is not valid E-mail!',
                   },
                   {
                       required: true,
                       message: 'Please input your E-mail!',
                   },
               ]}
           >
               <Input className='input-here' prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
           </Form.Item>

           <Form.Item name="password" className='input-login'
               rules={[
                   {
                       required: true,
                       message: 'Please input your Password!',
                   },
               ]}
           >
               <Input.Password className='input-here' prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
           </Form.Item>

           <Form.Item>
               <Link className="login-form-forgot link" to="/forgot">
                   Forgot password
               </Link>
           </Form.Item>

           <Form.Item>
               <Button type="danger" htmlType="submit" className="login-form-button">
                   Login
               </Button>
               <br /> <br />
               Or <Link to="/signup" className='link' >register now!</Link>
           </Form.Item>
       </Form>
   </div></>
    )
}
export default Login;