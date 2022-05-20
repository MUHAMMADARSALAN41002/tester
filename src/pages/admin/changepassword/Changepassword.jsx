import React from 'react'
import { Form, Input, Button, message } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { auth } from '../../../firebase/Config';
import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from 'react-router-dom';
import Navbar from '../../../components/adminnavbar/AdminNavbar';

const Changepassword = () => {
    const onFinish = (values) => {
        const email = values.email;
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent! 
                message.success('We have send password change details to your Gmail addresss');   
            })
            .catch((error) => {
                const errorMessage = error.message;
                message.error(errorMessage);
            });
    };

    return (
      <> <Navbar />  <div className='forgot'>
      <h1 className='heading-forgot' id='heading-forgot'> Change Password </h1>
      <p className='paragraph-forgot'>You can change your Password here</p>
      <Form name="normal_forget" className="forgot-form" onFinish={onFinish} >
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
              <Input className='email-input' prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>

          <Form.Item>
              <Button type="danger" htmlType="submit" className="forgot-form-button">
                  Change password
              </Button>
   <br /><br />
              <h2>Steps</h2>
              <ul>
                  <li>Enter E-mail Address</li>
                  <li>Click on Change Password button</li>
                  <li>We send link to your E-mail</li>
                  <li>Click on this link</li>
                  <li>Enter new Password</li>
                  <li>Click on save button</li>
              </ul>
          </Form.Item>
      </Form>
      
  </div></>
    )
}
export default Changepassword;