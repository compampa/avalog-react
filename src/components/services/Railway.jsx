import React from 'react'
import { Link } from 'react-router-dom'

export default function Railway() {
  return (
    <div >
      <div style={{ backgroundImage: 'url(./icons/background/railways.svg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '525px' }}>
        <div className="container text-white" style={{ width: '1000px', marginBottom: '250px' }}>
          <div className="">
            <h1 className='bold-text py-5' style={{ fontSize: '34px' }}>Железнодорожный контейнерный сервис</h1>
            <p style={{ width: '700px', fontSize: '24px' }}>AVALOG организует железнодорожные перевозки регулярными контейнерными поездами в международном сообщении </p>
          </div>
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
      <div className="d-flex flex-column align-items-center justify-content-center text-white my-5" >
        <img src="./icons/railways/about.svg" alt="about" />
        <img src="./icons/railways/railways.svg" alt="price" />
        <img src="./icons/railways/reason.svg" alt="price" />
        <div className="d-flex flex-column m-5" style={{ width: '1000px' }}>
          <h1 style={{ fontSize: '34px' }}>Основные маршруты и направления</h1>
          <div className="d-flex flex-row gap-5 my-5 ">
            <img src="./icons/railways/map-2.svg" alt="price" />
            <img src="./icons/railways/map-1.svg" alt="price" />
          </div>
        </div>
      </div>
    </div>
  )
}
