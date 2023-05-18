import React from 'react'
import ShowTextServices from '../ui/ShowTextServices'
import ButtonServices from '../ui/ButtonServices'

export default function Services() {
  const items = [{path: 'multimodal', imgURL: 'multimodal.svg'}]

  return (
    <div >
      <div style={{ backgroundImage: 'url(./icons/background/sevices.svg)', backgroundSize: 'cover', backgroundPosition: 'center', height:'525px'}}>
        <div className="container text-white" style={{ width: '1000px', marginBottom: '250px'}}>
          <h1 className='bold-text' style={{ fontSize: '54px' , paddingTop: '15px'}}> AVALOG – это создание лучших логистических международных маршрутов под запрос клиента</h1>
        </div>
      </div>
      <div className='mb-5'>
        <ButtonServices items={items} />
        <ShowTextServices title='Деятельность' text='Главной задачей компании является предоставление наиболее надежных и эффективных логистических решений в международных контейнерных перевозках' />
        <ShowTextServices title='AVALOG' text='AVALOG - это опыт работы в Китае на протяжении многих лет, которые укрепили его позиции в основных направлениях международной логистики между Россией и Китаем, благодаря чему наши клиенты получают лучший сервис под любую конкретную задачу' />
      </div>
    </div>
  )
}
