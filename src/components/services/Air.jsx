import React from 'react'
import { Link } from 'react-router-dom'

export default function Air() {
  return (
    <div >
      <div style={{ backgroundImage: 'url(./icons/background/air.svg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '525px' }}>
        <div className="container text-white" style={{ width: '1000px', marginBottom: '250px' }}>
          <p className='pt-5' style={{ fontSize: '34px' }}>    AVALOG доставляет грузы чартерными и регулярными авиарейсами в экспортном и импортном направлении, а также перевозит товары комбинированным сервисом, соединяющим в себе морскую и авиадоставку</p>
          <div className="d-flex flex-row gap-5 mt-5">
            <Link to='/services'>
              <img src="./icons/buttons/request.svg" alt="" />
            </Link>
            <Link to='/calculation'>
              <img src="./icons/buttons/calculate-black.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center text-white my-5" >
        <img src="./icons/air/about.svg" alt="about" />
        <h3 className='my-5' style={{ width: '1000px' }}>Авиа перевозка – это один из самых быстрых и надежных способов доставки вашего груза , особенно если груз относится к категории скоропортящихся или режимных грузов , а также позволяет отправить груз в оперативном режиме если важны сроки доставки</h3>
        <img src="./icons/air/steps.svg" alt="about" />
      </div>
    </div>
  )
}
