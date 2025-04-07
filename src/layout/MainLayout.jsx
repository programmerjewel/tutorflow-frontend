import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  return (
   <>
      <Navbar/>
      <div className='min-h-[calc(100vh-290px)]'>
        <Outlet />
      </div>
      <Footer/>
   </>
  );
};

export default MainLayout;