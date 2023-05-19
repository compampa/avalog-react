import React from 'react';
import { Link } from 'react-router-dom';
import ButtonDropdown from './ButtonDropdown';

export default function Navbar() {
  const services = [
    { name: 'Мультимодальные перевозки', path: 'multimodal' },
    { name: 'Сборный груз', path: 'cargo' },
    { name: 'Железнодорожный сервис', path: 'railways' },
    { name: 'Таможенное оформление', path: 'declaration' },
    { name: 'Аренда контейнеров', path: 'rent' },
    { name: 'Авиаперевозки', path: 'air' },
    { name: 'Автомобильные перевозки', path: 'cars' },
    { name: 'Морской сервис', path: 'sea' },
  ]
  const faq = [
    { name: 'Таможенное оформление', path: 'declarationInfo' },
    { name: 'ЖД перевозки', path: 'railwaysInfo' },
    { name: 'Сборные грузы', path: 'cargoInfo' },
    { name: 'Международные перевозки', path: 'worldInfo' },
  ]
  return (
    <div style={{ backgroundColor: '#2C2929', height: '98px' }} className='d-flex justify-content-between align-items-center'>
      <nav style={{ fontSize: '18px' }} className='container d-flex justify-content-between align-items-center'>
        <div className="logo">
          <img src='./icons/navbar/logo.svg' alt="logo" />
        </div>
        <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>О компании</Link>
        <div className="dropdown-center">
          <button type='button' className="dropdown-toggle" style={{ textDecoration: 'none', color: 'white', backgroundColor: 'transparent', border: 'none', padding: '0', margin: '0', fontSize: 'inherit', cursor: 'pointer', backgroundImage: 'none' }} data-bs-toggle="dropdown">
            Услуги
          </button>
          <ButtonDropdown items={services} />
        </div>
        <Link to="/jobs" style={{ textDecoration: 'none', color: 'white' }}>Вакансии</Link>
        <Link to="/contacts" style={{ textDecoration: 'none', color: 'white' }}>Контакты</Link>
        <div className="dropdown-center">
          <button type='button' className="dropdown-toggle" style={{ textDecoration: 'none', color: 'white', backgroundColor: 'transparent', border: 'none', padding: '0', margin: '0', fontSize: 'inherit', cursor: 'pointer', backgroundImage: 'none' }} data-bs-toggle="dropdown">
            F.A.Q.
          </button>
          <ButtonDropdown items={faq} />
        </div>
        <div>
          <Link to="/" style={{ fontSize: '16px', textDecoration: 'none', color: 'white' }}>ENG</Link>
          <button type='button' style={{ backgroundColor: '#2C2929', border: 'none', marginLeft: '20px' }}>
            <img src='./icons/navbar/profile.svg' alt="profile" style={{ width: '54px', height: '53px', margin: '0', padding: '0' }} />
          </button>
        </div>
      </nav>
    </div>
  );
}
