import React from 'react';

import AppRoutes from './AppRoutes';
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';
import LinksFooter from './ui/LinksFooter';

export default function App() {

  return (
    <div className='bg-black' style={{ fontFamily: 'Roboto' }}>
      <Navbar />
      <AppRoutes />
      <LinksFooter />
      <Footer />
    </div>
  )
}
