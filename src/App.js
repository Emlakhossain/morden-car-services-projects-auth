import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Services/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Services from './Pages/Home/Services/Services';
import Footer from './Pages/Shared/Footer/Footer';
import ServicesInfo from './Pages/ServicesInfo/ServicesInfo';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequirAuth from './Pages/RequirAuth/RequirAuth/RequirAuth';
import Booking from './Pages/Booking/Booking';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';



function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/service/:serviceId' element={<ServicesInfo></ServicesInfo>}></Route>
        <Route path='/booking' element={<RequirAuth>
          <Booking></Booking>
        </RequirAuth>}></Route>
        <Route path='/addservice' element={<RequirAuth><AddService></AddService></RequirAuth>}></Route>
        <Route path='/manageservices' element={<RequirAuth><ManageServices></ManageServices></RequirAuth>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
