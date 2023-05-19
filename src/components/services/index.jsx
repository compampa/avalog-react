import React from 'react'
import ShowTextServices from '../ui/ShowTextServices'
import ButtonServices from '../ui/ButtonServices'

export default function Services() {
  const items = [
    {path: 'multimodal', imgURL: 'multimodal.svg', text: 'Мультимодальный сервис'},
    {path: 'sea', imgURL: 'sea.svg', text: 'Морской сервис'},
    {path: 'railway', imgURL: 'railway.svg', text: 'Железнодорожный сервис'},
    {path: 'cargo', imgURL: 'cargo.svg', text: 'Сборные грузы'},
    {path: 'cars', imgURL: 'cars.svg', text: 'Автомобильные перевозки'},
    {path: 'air', imgURL: 'air.svg', text: 'Авиаперевозки'},
    {path: 'rent', imgURL: 'rent.svg', text: 'Аренда контейнеров'},
    {path: 'declaration', imgURL: 'declaration.svg', text: 'Таможенное оформление'},
  ]

  return (
    <div >
      <div style={{ 
        backgroundImage: 'url(./icons/background/sevices.svg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', height:'525px'
        }}>
        <div className="container text-white" style={{ width: '1000px', marginBottom: '250px'}}>
          <h1 className='bold-text' style={{ fontSize: '54px' , paddingTop: '15px'}}> 
          AVALOG – это создание лучших логистических международных маршрутов под запрос клиента
          </h1>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <ButtonServices items={items} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '128px' }}>
       <img src='./icons/services/serviseText.svg' alt='text' style={{ width: '1000px' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '128px' }}>
       <img src='./icons/services/map.svg' alt='text' style={{ width: '1000px' }} />
      </div>
      {/* <div className='mb-5'> */}
        {/* <ShowTextServices title='Преимущества личного кабинета' text='Главной задачей компании является предоставление наиболее надежных и эффективных логистических решений в международных контейнерных перевозках' /> */}
      {/* </div> */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
       <img src='./icons/services/servicesText2.png' alt='text' style={{ width: '1000px' }} />
      </div>
    </div>
  )
}
