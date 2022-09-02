import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import reportWebVitals from './reportWebVitals';
import Home from './components/Pages/Home/HomePage';
import MembersPage from './components/Pages/Members/MembersPage'
import Login from './components/Pages/Login/LoginAdm'
// import Loading from '.'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
        <Routes>

          <Route exact path="/" element={<Home/>}/>
          <Route path="/MembersPage" element={<MembersPage/>}/>           
          <Route path="/Login" element={<Login />}/>
          {/* <Route path="*" element={<Loading />}/> */}

        </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
