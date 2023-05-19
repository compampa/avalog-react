import React from 'react'
import FormCalculationSm from '../ui/FormCalculationSm'

export default function Jobs() {
  return (
    <div >
      <div style={{ backgroundImage: 'url(./icons/background/sea.svg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '525px' }}>
        <div className="container text-white" style={{ width: '1000px', marginBottom: '250px' }}>
          <h1 className='bold-text py-5' style={{ fontSize: '34px' }}>Вакансии</h1>
          <p style={{ width: '700px', fontSize: '24px' }}> AVALOG – это создание лучших логистических международных маршрутов под запрос клиента. Ждём тебя в нашей команде!</p>
          <div className='d-flex flex-column   my-5 p-5'
            style={{ width: '880px', backgroundColor: '#2b2929', marginLeft: 'auto', marginRight: 'auto', borderRadius: '30px', }}>
            <FormCalculationSm />
          </div>
        </div>
      </div>
    </div>
  )
}
