import React from 'react';

import AppRoutes from './AppRoutes';
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';
import LinksFooter from './ui/LinksFooter';

export default function App() {

  return (
    <div>
      <Navbar />
      <AppRoutes />
      <LinksFooter />
      <Footer />
    </div>
  )
}
