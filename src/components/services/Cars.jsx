import React from 'react'
import { Link } from 'react-router-dom'

export default function Cars() {
  return (
    <div >
      <div style={{ backgroundImage: 'url(./icons/background/cars.svg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '525px' }}>
        <div className="container text-white" style={{ width: '1000px', marginBottom: '250px' }}>
          <h1 className='bold-text py-5' style={{ fontSize: '34px' }}>   AVALOG выполняет автомобильные перевозки в рамках мультимодального сервиса, а также для доставки грузов от терминалов прибытия до конечных получателей</h1>
          <div className="d-flex flex-row gap-5">
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
        <img src="./icons/cars/about.svg" alt="about" />
        <ul className='my-5' style={{ width: '1000px', fontSize: '27px' }}>
          Мы предлагаем :
          <li>Перевозка груза в еврофурах</li>
          <li>Сборные автоперевозки</li>
          <li>Автовывоз контейнеров с морских или железнодорожных терминалов</li>
          <li>Автоперевозки негабаритного или тяжеловесного груза</li>
          <li>Международные автоперевозки</li>
        </ul>
        <img src="./icons/cars/price.svg" alt="price" />
        <ul className='my-5' style={{ width: '1000px', fontSize: '27px' }}>
          Процесс работы при международном сообщении:
          <li>Оперативный забор груза со склада в Китае или с завода</li>
          <li>Оформление документации , экспортное оформление</li>
          <li>Перевозка груза, до границы</li>
          <li>Оформление ВТТ (внутреннего таможенного транзита) или растаможка груза</li>
          <li>Доставка груза до конечного получателя или до склада</li>
        </ul>
      </div>
    </div>
  )
}
