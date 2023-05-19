import React from 'react'
import { Link } from 'react-router-dom'

export default function Multimodal() {
  return (
    <div >
      <div style={{ backgroundImage: 'url(./icons/background/sevices.svg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '525px' }}>
        <div className="container text-white" style={{ width: '1000px', marginBottom: '250px' }}>
          <h1 className='bold-text py-5' style={{ fontSize: '34px' }}>Мультимодальные перевозки</h1>
          <p style={{ width: '700px', fontSize: '24px' }}>АВАЛОГ осуществляет международные контейнерные перевозки с использованием всех видов транспорта. Для импорта, экспорта и транзита грузов используются в собственном пользовании фитинговые платформы, разрабатываются маршруты, включая мультимодальные.</p>
          <div className="d-flex flex-row gap-5 mt-5">
            <Link to='/services'>
              <img src="./icons/buttons/request.svg" alt="" />
            </Link>
            <Link to='/services'>
              <img src="./icons/buttons/calculate-black.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center text-white my-5 gap-5" >
        <img src="./icons/multimodal/about.svg" alt="about" />
        <h1>Виды грузоперевозок и типы грузов</h1>
        <img src="./icons/multimodal/icons.svg" alt="about" />
        <img src="./icons/multimodal/import.svg" alt="about" />
        <img src="./icons/multimodal/export.svg" alt="about" />
        <img src="./icons/multimodal/multimodal.svg" alt="price" />
        <img src="./icons/multimodal/map.svg" alt="about" />
        <img src="./icons/multimodal/schema.svg" alt="about" />
      </div>
    </div>
  )
}

