import React from 'react'
import ButtonServices from '../ui/ButtonServices'
import FormCalculationLg from '../ui/FormCalculationLg'



export default function Services() {
  const items = [
    { path: 'multimodal', imgURL: 'multimodal.svg', text: 'Мультимодальный сервис' },
    { path: 'sea', imgURL: 'sea.svg', text: 'Морской сервис' },
    { path: 'railways', imgURL: 'railway.svg', text: 'Железнодорожный сервис' },
    { path: 'cargo', imgURL: 'cargo.svg', text: 'Сборные грузы' },
    { path: 'cars', imgURL: 'cars.svg', text: 'Автомобильные перевозки' },
    { path: 'air', imgURL: 'air.svg', text: 'Авиаперевозки' },
    { path: 'rent', imgURL: 'rent.svg', text: 'Аренда контейнеров' },
    { path: 'declaration', imgURL: 'declaration.svg', text: 'Таможенное оформление' },
  ]

  return (
    <div >
      <div style={{
        backgroundImage: 'url(./icons/background/sevices.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center', height: '525px'
      }}>
        <div className="container text-white" style={{ width: '1000px', marginBottom: '250px' }}>
          <h1 className='bold-text' style={{ fontSize: '54px', paddingTop: '15px' }}>
            AVALOG – это создание лучших логистических международных маршрутов под запрос клиента
          </h1>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ButtonServices items={items} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '128px' }}>
        <img src='./icons/services/serviseText.svg' alt='text' style={{ width: '1000px' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '128px' }}>
        <img src='./icons/services/map.svg' alt='text' style={{ width: '1000px' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '47px' }}>
        <img src='./icons/services/servicesText2.png' alt='text' style={{ width: '1000px' }} />
      </div>
      <div className='d-flex flex-column   my-5 p-5'
        style={{ width: '880px', backgroundColor: '#2b2929', marginLeft: 'auto', marginRight: 'auto', borderRadius: '30px', }}>
        <FormCalculationLg />
      </div>
    </div >
  )
}
