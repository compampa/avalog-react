import React from 'react'

export default function Contacts() {
  return (
    <div >
      <div style={{ backgroundImage: 'url(./icons/background/cars.svg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '525px' }}>
        <div className="container text-white" style={{ width: '1000px', marginBottom: '250px' }}>
          <h1 className='bold-text py-5' style={{ fontSize: '34px' }}>Контакты</h1>
          <p style={{ width: '700px', fontSize: '24px' }}> AVALOG – это создание лучших логистических международных маршрутов под запрос клиента. Наши контакты для связи!</p>
          <div className="d-flex flex-row justify-content-between mt-5" style={{ width: '700px', fontSize: '24px' }}>
            <div>
              <p >Позвонить</p>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '3px', background: '#fff', borderRadius: '15px' }}>
                <a href="tel:+79309996347"
                  style={{ color: 'white', textDecorationLine: 'none', background: '#040404', padding: '15px', borderRadius: '15px' }}
                >8 (930) 999 – 63 - 47</a>
              </div>
            </div>
            <div>
              <p >Написать на почту</p>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '3px', background: '#fff', borderRadius: '15px' }}>
                <a href="mailto:info@avalog.ru"
                  style={{ color: 'white', textDecorationLine: 'none', background: '#040404', padding: '10px', borderRadius: '15px', width: '200px' }}
                >info@avalog.ru</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
