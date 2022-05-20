import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Admin from '../pages/admin/Admin';
import Changepassword from '../pages/admin/changepassword/Changepassword';
import Courses from '../pages/admin/courses/Courses';
import Createcourses from '../pages/admin/courses/Createcourses';
import Showcourses from '../pages/admin/courses/Showcourses';
import Createadmin from '../pages/admin/createadmin/Createadmin';
import Createuser from '../pages/admin/createuser/Createuser';
import AdminHome from '../pages/admin/Home/AdminHome';
import Users from '../pages/admin/users/Users';
import AfterLogin from '../pages/afterlogin/AfterLogin';
import Forgot from '../pages/forgot/Forgot';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';

const Router = () => {
  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/home" element={<AfterLogin />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/homeadmin" element={<AdminHome />} />
      <Route path="/usersadmin" element={<Users />} />
      <Route path="/createadmin" element={<Createadmin />} />
      <Route path="/createuser" element={<Createuser />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/showcourses" element={<Showcourses />} />
      <Route path="/createcourses" element={<Createcourses />} />
      <Route path="/changepassword" element={<Changepassword />} />
    </Routes>
  </BrowserRouter>
  )
}
export default Router;