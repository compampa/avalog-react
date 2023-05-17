import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer text-white" style={{
      backgroundColor: '#2C2929'
    }}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="colum-md-6">
            <img className='mt-3' src="./icons/footer/logo.svg" alt="logo footer" />
            <div className="d-flex gap-5 mt-3">
              <Link to="/about" style={{ color: 'white', textDecorationLine: 'none' }}>Главная</Link>
              <Link to='/services' className="d-flex flex-column gap-2" style={{ color: 'white', textDecorationLine: 'none' }}>
                Услуги
                <div className='d-flex flex-column gap-2 ' style={{ fontSize: '11px' }}>
                  <Link to='/services/multimodal' style={{ color: 'white', textDecorationLine: 'none' }}>Мультимодальный сервис</Link>
                  <Link to='/services/sea' style={{ color: 'white', textDecorationLine: 'none' }}>Морской сервис</Link>
                  <Link to='/services/railway' style={{ color: 'white', textDecorationLine: 'none' }}>Железнодорожный сервис</Link>
                  <Link to='/services/cargo' style={{ color: 'white', textDecorationLine: 'none' }}>Сборные грузы</Link>
                  <Link to='/services/cars' style={{ color: 'white', textDecorationLine: 'none' }}>Автомобильные перевозки</Link>
                  <Link to='/services/air' style={{ color: 'white', textDecorationLine: 'none' }}>Авиаперевозки</Link>
                  <Link to='/services/rent' style={{ color: 'white', textDecorationLine: 'none' }}>Аренда контейнеров</Link>
                  <Link to='/services/declaration' style={{ color: 'white', textDecorationLine: 'none' }}>Таможенное оформление</Link>
                </div>

              </Link>
              <Link to='/jobs' style={{ color: 'white', textDecorationLine: 'none' }}>Вакансии </Link>
              <Link to='/contacts' style={{ color: 'white', textDecorationLine: 'none' }}>Контакты</Link>
              <Link to='/faq' style={{ color: 'white', textDecorationLine: 'none' }}>
                F.A.Q
                <div className='d-flex flex-column gap-2' style={{ fontSize: '11px' }}>
                  <Link to='/services/multimodal' style={{ color: 'white', textDecorationLine: 'none' }}>Мультимодальный сервис</Link>
                  <Link to='/services/railway' style={{ color: 'white', textDecorationLine: 'none' }}>Железнодорожный сервис</Link>
                  <Link to='/services/cargo' style={{ color: 'white', textDecorationLine: 'none' }}>Сборные грузы</Link>
                  <Link to='/services/declaration' style={{ color: 'white', textDecorationLine: 'none' }}>Таможенное оформление</Link>
                </div>
              </Link>
            </div>
          </div>

          <div className="colum-md-6">
            <div className="d-flex my-5">
              <div className="d-flex flex-column gap-4">
                <div className="d-flex gap-3 align-items-center">
                  <img src="./icons/footer/phone.svg" alt="phone" />
                  <a href="tel:+79309996347"
                    style={{ color: 'white', textDecorationLine: 'none' }}
                  >8 (930) 999 – 63 - 47</a>
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <img src="./icons/footer/email.svg" alt="email" />
                  <a href="mailto:info@avalog.ru"
                    style={{ color: 'white', textDecorationLine: 'none' }}
                  >info@avalog.ru</a>
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <img src="./icons/footer/location.svg" alt="location" />
                  <a href='https://yandex.ru/maps/-/CCUo4GcmhB'
                    style={{ color: 'white', textDecorationLine: 'none' }}>
                    117105, г. Москва, ш. Варшавское, д. 1А , пом. 3К/1П
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mb-5">
          <p style={{ fontSize: '11px' }}>Все права защищены. <Link to="/policy" style={{ color: 'white' }}>Политика конфиденциальности</Link></p>
        </div>
      </div >
    </footer >
  );
}