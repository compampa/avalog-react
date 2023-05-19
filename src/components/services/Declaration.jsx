import React from 'react'
import { Link } from 'react-router-dom'

export default function Declaration() {
  return (
    <div >
      <div style={{ backgroundImage: 'url(./icons/background/decla.svg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '525px' }}>
        <div className="container text-white" style={{ width: '1000px', marginBottom: '250px' }}>
          <h1 className='bold-text py-5' style={{ fontSize: '34px' }}>Таможенные услуги</h1>
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
        <img src="./icons/declaration/about.svg" alt="about" />
        <div className='my-3' style={{ width: '1000px', fontSize: '24px' }}>
          <p><b style={{ textDecorationLine: 'underline' }}>Наша задача</b> — представление интересов наших клиентов в таможенных органах Российской Федерации по всем вопросам, связанным с таможенной очисткой товаров. Все отношения строятся на основе договора.</p>
          <p>Мы оказываем полный комплекс таможенных услуг, предусмотренным законодательством Российской Федерации, а также ЕАЭС для прохождения таможенного оформления импортных и экспортных товаров. Осуществляем таможенное оформление товаров из любой точки мира. Многолетний практический опыт нашей компании и длительный стаж работы каждого штатного сотрудника позволяют нам проводить компетентные процедуры по таможенному оформлению товаров, под любой таможенной процедурой предусмотренной законодательством.</p>
          <i>Обращаем внимание, что мы имеем возможность оказывать услуги на всех таможнях! Аэропорты, морские порты, ж\д станции, автомобильные СВХ, ЦЭД (Центры Электронного Декларирования), таможенные посты.</i>
        </div>
        <img src="./icons/declaration/services.svg" alt="price" />
        <img src="./icons/declaration/declaration.svg" alt="price" />
      </div>
    </div>
  )
}
