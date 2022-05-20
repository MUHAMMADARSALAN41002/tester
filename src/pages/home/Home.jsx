import { Button } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Customcard from '../../components/card/Customcard';
import Navbar from '../../components/navbar/Navbar';
import './Home.css'
const Home = () => {
    const navigate = useNavigate();
  return (
      <>
    <Navbar />
    
    <div style={{display:"flex", justifyContent:"center", marginTop:"50px",  width:"100%", height:"100vh"}}>
   
    <div>
    <Customcard /> 
    </div>
 
     <Button style={{justifySelf:"center"}} type="primary" className='viewcourses-btn' onClick={() => navigate('/courses')}>View Courses</Button>
    </div>
 
      </>
  )
}
export default Home;