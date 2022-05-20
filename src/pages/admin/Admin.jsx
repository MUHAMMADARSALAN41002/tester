import React from 'react'
import Login from './Login/AdminLogin';
import { Row, Col } from 'antd';
import smit from '../../images/smit.jpg'

const Admin = () => {
  return (
    <>
    <Row >
      <Col span={12}><img src={smit} style={{width:"100%", height:"100vh"}} /></Col>
      <Col   span={12}>  <Login /></Col>
    </Row>
  
    </>
  )
}
export default Admin;