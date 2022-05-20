import { Button } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Adminlist from '../../../components/adminlist/Adminlist';
import Navbar from '../../../components/adminnavbar/AdminNavbar';
import './Home.css'
const AdminHome = () => {
  const navigate = useNavigate();
  return (
    <>
    <Navbar />
    <Button className='createadminbtn' type='primary' onClick={() => navigate('/createadmin')}>Create Admin</Button>
    <Adminlist />
    </>
  )
}
export default AdminHome;