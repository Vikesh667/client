import Navbar from './commponent/Navbar/Navbar';
import { Route,Routes } from 'react-router-dom';
import Register from './commponent/Register/Register';
import Login from './commponent/Login/Login';
import Home from './commponent/Home/Home';
import PrivateComponent from './commponent/PrivateComponent';
import Profile from './commponent/Profile/Profile';
import AdminLogin from './commponent/Admin/AdminLogin';
import Dashboard from './commponent/Dashboard/Dashboard';
import AdmissionForm from './commponent/AdmissionFrom/AdmissionForm';
import ResetPassword from './commponent/Password/ResetPassword';
import ForgotPassword from './commponent/Password/ForgotPassword';

function App() {
  const auth=JSON.parse(localStorage.getItem("User"))
  console.log(auth)
  return (
    <>
     <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>}/>
      <Route element={<PrivateComponent/>}>
      <Route path='/about' element={<h1>about</h1>}/>
      <Route path='/course' element={<h1>course</h1>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/dashboard' element={< Dashboard/>}/>
     </Route>
      <Route path='/admissionform' element={<AdmissionForm/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/admin' element ={auth? < Dashboard/>:<AdminLogin/>}/>
      <Route path='/resetPassword' element={<ResetPassword/>}/>
      <Route path='/forgotPassword/:id/:token' element={<ForgotPassword/>}/>
     </Routes>
    </>
  );
}

export default App;
