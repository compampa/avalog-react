import React from 'react'
import { Link } from 'react-router-dom'



export default function Rent() {
  return (
    <div >
      <div style={{ backgroundImage: 'url(./icons/background/rent.svg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '525px' }}>
        <div className="container text-white" style={{ width: '1000px', marginBottom: '250px' }}>
          <h1 className='bold-text py-5' style={{ fontSize: '34px' }}>Аренда контейнеров из Китая в Россию и обратно</h1>
          <p style={{ width: '700px', fontSize: '24px' }}>Компания AVALOG выступает таможенным представителем и предоставляет своим клиентам услуги по таможенному оформлению коммерческих партий грузов, прибывающих на территорию РФ любым видом транспорта.</p>
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
        <img src="./icons/rent/about.svg" alt="about" />
        <div className='mt-2' style={{ width: '1000px' }} >
          <h2 className="my-3" >Аренда контейнеров из Китая</h2>
          <div className="d-flex flex-column gap-5">
            <h5>Аренда контейнера подразумевает, что вы сами организуете перевозку, что позволяет с максимальным удобством доставить свой товар без перегрузов, простоев и прочих транспортных рисков.</h5>
            <h5>Так вы сможете планировать свои действия и график поставок с максимальной надежностью и гарантией сохранности груза.</h5>
            <h5>Если вы хотите заказать транспортировку груза «под ключ», не занимаясь вопросами логистики лично, то обратите внимание на услугу "перевозка контейнерным поездом".</h5>
          </div>
        </div>
        <img className='mt-5' src="./icons/rent/rus.svg" alt="about" />
      </div>
    </div>
  )
}
