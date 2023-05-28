import Navbar from './commponent/Navbar/Navbar';
import { Route,Routes } from 'react-router-dom';
import Register from './commponent/Register/Register';
import Login from './commponent/Login/Login';
import Home from './commponent/Home/Home';
import PrivateComponent from './commponent/PrivateComponent';
import Profile from './commponent/Profile/Profile';
function App() {
  return (
    <>
     <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>}/>
      <Route element={<PrivateComponent/>}>
      <Route path='/about' element={<h1>about</h1>}/>
      <Route path='/course' element={<h1>course</h1>}/>
      <Route path='/profile' element={<Profile/>}/>
      </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
     </Routes>
    </>
  );
}

export default App;
