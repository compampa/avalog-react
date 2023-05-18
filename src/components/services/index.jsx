import React from 'react'
import ShowTextServices from '../ui/ShowTextServices'

export default function Services() {


  return (
    <div >
      <div className="container text-white mt-5" style={{ width: '1000px', marginBottom: '250px', backgroundImage: 'url(./icons/background/sevices.svg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <h1 className='bold-text' style={{ fontSize: '54px' }}> AVALOG – это создание лучших логистических международных маршрутов под запрос клиента</h1>
      </div>
      <div className='mb-5'>
        <ShowTextServices title='Деятельность' text='Главной задачей компании является предоставление наиболее надежных и эффективных логистических решений в международных контейнерных перевозках' />
        <ShowTextServices title='AVALOG' text='AVALOG - это опыт работы в Китае на протяжении многих лет, которые укрепили его позиции в основных направлениях международной логистики между Россией и Китаем, благодаря чему наши клиенты получают лучший сервис под любую конкретную задачу' />
      </div>
    </div>
  )
}
