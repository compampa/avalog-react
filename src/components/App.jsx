import React from 'react';

import AppRoutes from './AppRoutes';
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';

export default function App() {
  return (
    <div className='container'>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  )
}
