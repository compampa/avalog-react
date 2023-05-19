import React from 'react'
import { Link } from 'react-router-dom'

export default function Sea() {
  return (
    <div >
      <div style={{ backgroundImage: 'url(./icons/background/sea.svg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '525px' }}>
        <div className="container text-white" style={{ width: '1000px', marginBottom: '250px' }}>
          <h1 className='bold-text py-5' style={{ fontSize: '34px' }}>Морской сервис</h1>
          <p style={{ width: '700px', fontSize: '24px' }}>Компания AVALOG выступает таможенным представителем и предоставляет своим клиентам услуги по таможенному оформлению коммерческих партий грузов, прибывающих на территорию РФ любым видом транспорта.</p>
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
        <img src="./icons/sea/about.svg" alt="about" />
        <div className='mt-2' style={{ width: '1000px' }} >
          <div className="d-flex flex-row gap-5 align-items-center justify-content-center">
            <img className='rounded mt-3' style={{ width: '245px', height: '185px' }} src="./icons/services/sea.svg" alt="about" />
            <h5>Имея прямые договора с судовладельцами и соглашения с партнерами , компания АВАЛОГ реализует отправку чартерных рейсов между Китаем и Россией , что позволяет получить более выгодный сервис по отправке ваших грузов в 20-ти и 40-ка футовых контейнерах</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
