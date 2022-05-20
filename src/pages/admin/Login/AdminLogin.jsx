import React from 'react'
import { Form, Input, Button, message } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './Login.css'
import { collection, getDocs } from 'firebase/firestore';
import { db, auth } from '../../../firebase/Config';

const Login = () => {
    const navigate = useNavigate();

    const onFinish = (values) => {
        const {email, password} = values;
        

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;    
                console.log('ok')
                // Signed in 
                getDocs(collection(db, "admins")).then(querySnapshot => {
                    querySnapshot.forEach((doc) => {           
                            let useremail = doc.data().email;
                            if (useremail === user.email) {
                                const useruid = user.uid;
                                localStorage.setItem('currentuser', useruid)            
                                navigate('/homeadmin')
                                
                            } else {
                                // message.error('admin not exists'); 
                            }
                    })
                }).catch((error) => {
                    const errorMessage = error.message;
                    message.error(errorMessage);
                })
             
            })
            .catch((error) => {
                const errorMessage = error.message;
                message.error(errorMessage);
            })
    };
    return (
       <> <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%", height:"100vh"}}>
       <Form name="normal_login" className="login-form" onFinish={onFinish} >
           <h1 className='heading-login' id='sign-heading-login'> Admin Login   </h1> 
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
               <Button type="danger" htmlType="submit" className="login-form-button">
                   Login
               </Button>
           </Form.Item>
       </Form>
   </div></>
    )
}
export default Login;