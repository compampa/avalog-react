import React from 'react';
import { Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Contacts from './pages/Contacts';
import FAQ from './pages/FAQ';
import Jobs from './pages/Jobs';
import Policy from './pages/Policy';
import DeclarationInfo from './pages/DeclarationInfo';
import RailwaysInfo from './pages/RailwaysInfo';
import CargoInfo from './pages/CargoInfo';
import WorldInfo from './pages/WorldInfo';
import Auth from './auth/Auth';
import Profile from './profile';
import Services from './services';
import Air from './services/Air';
import Cargo from './services/Cargo';
import Cars from './services/Cars';
import Declaration from './services/Declaration';
import Multimodal from './services/Multimodal';
import Railway from './services/Railway';
import Rent from './services/Rent';
import Sea from './services/Sea';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/about' element={<About />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/jobs' element={<Jobs />} />
      <Route path='/policy' element={<Policy />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/declarationInfo' element={<DeclarationInfo />} />
      <Route path='/railwaysInfo' element={<RailwaysInfo />} />
      <Route path='/worldInfo' element={<WorldInfo />} />
      <Route path='/cargoInfo' element={<CargoInfo />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/services' element={<Services />} />
      <Route path='/air' element={<Air />} />
      <Route path='/cargo' element={<Cargo />} />
      <Route path='/cars' element={<Cars />} />
      <Route path='/declaration' element={<Declaration />} />
      <Route path='/multimodal' element={<Multimodal />} />
      <Route path='/railway' element={<Railway />} />
      <Route path='/rent' element={<Rent />} />
      <Route path='/sea' element={<Sea />} />
    </Routes>
  )
}
