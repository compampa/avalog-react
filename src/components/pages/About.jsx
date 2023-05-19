import React from 'react'
import ButtonShowMoreWhite from '../ui/ButtonShowMoreWhite'
import ButtonShowMoreBlack from '../ui/ButtonShowMoreBlack'

export default function About() {
  return (
    <div >
      <div style={{ backgroundImage: 'url(./icons/background/decla.svg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '525px' }}>
        <div className="container text-white" style={{ width: '1000px', marginBottom: '250px' }}>
          <h1 className='bold-text py-5' style={{ fontSize: '64px' }}> AVALOG – это создание лучших логистических международных маршрутов под запрос клиента</h1>
        </div>
      </div>
      <div className='mb-5'>
        <ButtonShowMoreWhite title='Деятельность' text='Главной задачей компании является предоставление наиболее надежных и эффективных логистических решений в международных контейнерных перевозках' />
        <ButtonShowMoreBlack title='AVALOG' text='AVALOG - это опыт работы в Китае на протяжении многих лет, которые укрепили его позиции в основных направлениях международной логистики между Россией и Китаем, благодаря чему наши клиенты получают лучший сервис под любую конкретную задачу' />
        <ButtonShowMoreWhite title='Надежность и уверенность проекта' text='Мы высоко ценим наши партнерские отношения, именно поэтому мы скрупулёзно относимся к каждому проекту, чтобы обеспечить гарантированный результат' />
        <ButtonShowMoreBlack title='Комплексный индивидуальный подход' text='Наша команда профессионалов состоит из коллег из Китая , которые обладая профессиональными компетенциями находить индивидуальный оптимальный и, при необходимости, нестандартный подход к достижению самых амбициозных результатов' />
        <ButtonShowMoreWhite title='Преимущества сотрудничества' text='Все логистические процессы от завода на котором изготавливается груз до конечного потребителя, придерживаются правилу 7R' />
        <ButtonShowMoreBlack title='Миссия компании' text='В принципах нашей работы стоит решение проблем еще до их возникновения, тем самым мы даем клиенту надёжный сервис, благодаря которому более 90% наших клиентов после первой перевозки остаются с нами' />
        <ButtonShowMoreWhite title='Ценности компании' text='В отношениях между партнерами и внутри компании' />
      </div>
    </div>
  )
}
