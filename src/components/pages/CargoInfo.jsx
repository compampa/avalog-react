import React from 'react'
import ButtonShowMoreWhiteDecla from '../ui/ButtonShowMoreWhiteDecla'

export default function CargoInfo() {
  return (
    <div >
      <div className="container text-white mt-5" style={{ width: '1000px', marginBottom: '50px', marginLeft: '300px' }}>
        <h1 className='bold-text' style={{ fontSize: '54px' }}>Сборные грузы</h1>
      </div>
      <div className='mb-5' style={{ fontSize: '20px' }}>
        <ButtonShowMoreWhiteDecla title='Чем отличаются паллетные перевозки от сборных грузов?'
          text='Главное отличие паллетной перевозки от перевозки сборного груза заключается в том, что в условиях паллетной доставки есть ряд правил, которые гарантируют наибольшую сохранность груза. Например, то, что паллеты не будут штабелироваться,также они застречены стретч-пленкой с захватом и нахлыстом на верхнии коробки. Груз не выступает за габариты паллеты, что гарантирует, что он не соприкоснется с другим грузом и не получит деформацию.' />
        <ButtonShowMoreWhiteDecla title=' Буду ли я стоять в очереди на растаможевание в сборном контейнере?'
          text='Получатели грузов независимы друг от друга. Клиент может забрать свой груз сразу после окончания таможенного оформления.' />
        <ButtonShowMoreWhiteDecla title='Обязательно ли предоставлять сертификат происхождения (Certificate of Origin)?'
          text='Согласно действующей мировой практике, при импорте грузов через морские порты, достаточно иметь копию сертификата происхождения. При таможенной очистке груза сертификат необходим, хотя в некоторых случаях достаточно информации о происхождении груза в инвойсе.' />
        <ButtonShowMoreWhiteDecla title='В домашнем коносаменте по моему грузу указан объем, отличный от указанных в коммерческих документах (инвойсе/пакинге). Что делать?'
          text='При получении груза на свой CFS (склад консолидации сборных грузов в стране отправления) агент измеряет его габариты и указывает в коносаменте фактические данные, вес товара берется на основании данных от отправителя и на складе не проверяется. Если объем Вашего сборного груза в коносаменте, который Вам прислали на проверку, отличается от того, что указан в инвойсе или упаковочном листе, Вы можете попросить отправителя внести изменения в коммерческие документы до прибытия сборного контейнера в страну назначения.' />
        <ButtonShowMoreWhiteDecla title='Что такое сборный груз?'
          text='      Чтобы груз назывался сборным, необходимо сочетание сразу трех условий:
          груз должен быть меньше по весу, чем максимально допустимый вес груза для перевозки в данной грузовой единице (например, морском контейнере, кузове грузового автомобиля, ж/д контейнере и т. п. )
          меньше по объему, чем максимально допустимый объем груза для перевозки в данной грузовой единице
          перевозиться в данной грузовой единице вместе с другими грузами' />
        <ButtonShowMoreWhiteDecla title='Как доставить сборный груз из Китая?'
          text='Сборный груз из Китая можно доставить несколькими способами: авиационным транспортом, по железной дороге в составе сборного контейнера, в морском контейнере через основные порты, автомобильным транспортом через сухопутные погранпереходы.' />
        <ButtonShowMoreWhiteDecla title='Правила перевозки сборных грузов'
          text='Независимо от способа доставки товаров, отправитель и перевозчик должны совершать определенные действия. Правила перевозки сборных грузов для заказчика следующие:
          1. Правильная упаковка — чистая, сухая и достаточно прочная (в случае невозможности упаковать продукцию своими силами, необходимо оплатить соответствующую услугу грузоперевозчику);
          2. Достоверность информации о продукции, предоставление перевозчику сертификатов соответствия и иной документации.
          Грузоперевозчик также руководствуется правилами, его ответственность:
          своевременно выставлять счета и документацию по услугам;
          уведомлять заказчика о проблемах при транспортировке (нарушение сроков доставки, хранения);
          заранее сообщать об изменении тарифов;
          нести финансовую ответственность в случае потери или порчи посылки.
          Четкое разграничение ответственности и соблюдение правил перевозки сборных грузов — залог быстрой доставки.
          ' />
        <ButtonShowMoreWhiteDecla title='Необходимая документация'
          text='Для транспортировки посылки в составе сборных грузов по РФ потребуется стандартный пакет документов:
          путевой лист;
          товарно-транспортная накладная по форме 1-Т для учета движения товарных ценностей;
          договор между грузоотправителем и грузоперевозчиком
          ' />
        <ButtonShowMoreWhiteDecla title='Нормативы сборных грузов'
          text='Грузоперевозки осуществляют в соответствии с правовыми документами:
          1. Федеральный закон № 87 от 30.06.2003 г. «О транспортно-экспедиционной деятельности»;
          2. Приказ Министерства Транспорта РФ № 23 от 11.02.2008 г. «Порядок оформления и формы экспедиторских документов»;
          3. ПП РФ № 554 от 08. 09. 2006 г. «Правила транспортно-экспедиционной деятельности»;
          4. Таможенная конвенция о международных перевозках от 14. 11. 1975 г.
          5. ФЗ № 311 от 27. 11. 2010 г «О таможенном регулировании в РФ»
       ' />
        <ButtonShowMoreWhiteDecla title='Что такое процесс консолидации?'
          text='Представьте, что вам нужно организовать перевозку товара по России. Заказать автомобиль слишком дорого, а контейнер — слишком большой для пересылаемого груза. В этом случае вам подойдет сборный груз — то есть объединение товаров разных поставщиков. Такой способ транспортировки удобен в том случае, если вы хотите максимально сэкономить на перевозке небольшого по объемам и весу товара.
          Вам не подойдет консолидация сборных грузов, если вы перевозите ценные произведения искусства. Также, если вам нужно доставить взрывоопасные вещества или медицинские препараты, убедитесь, что у транспортной компании есть лицензия на их перевозку.' />
        <ButtonShowMoreWhiteDecla title='Что такое склады консолидации?'
          text='Во время консолидации грузов ваши товары хранятся на складе, где и производят их сортировку.
          Когда ваш товар и товары других заказчиков сформированы в один груз, его отправляют по одному маршруту. У товаров одного груза не обязательно должно быть единое место назначения. Специалисты по логистике формируют маршрут так, чтобы поставщик, отправляясь в один населенный пункт, мог сделать остановку в других, находящихся по пути. Такая система позволяет быстрее формировать груз и доставлять ваш товар.Одно из основных преимуществ консолидации сборных грузов в том, стоимость такой перевозки для каждого из участников будет намного ниже, чем при единоличном заказе транспорта. При этом, полную ответственность за доставку документации и сохранность груза несет транспортная компания. Особенно выгодно это заказчикам, которым необходимо регулярно отправлять товары небольшого веса и объема.
          Компании, занимающиеся консолидацией грузов, обычно предлагают следующие услуги:
          тарирование (взвешивание и измерение груза);
          сортировка;
          упаковка и доупаковка грузов;
          доставка грузов до склада.
          Крупные транспортные компании обычно имеют свои склады для консолидации грузов во всех областных центрах страны. Чем больше у компании таких складов, чем более развитой является их сеть, тем быстрее и безопаснее пройдет процесс транспортировки. Помимо этого, многое при консолидации грузов зависит от профессионализма сотрудников, грамотного логистического управления и бережного отношения к деталям.
          ' />
        <ButtonShowMoreWhiteDecla title='Как рассчитать объем груза?'
          text='Для того, чтобы рассчитать объём груза, необходимо знать его длину, высоту и ширину. Замеры производятся по крайним выступающим точкам. Расчёт объёма осуществляется в кубометрах с учётом коэффициента укладки 1,1 по формуле: V = Д x Ш x В, где V – объём, Д – длина, Ш – ширина, В – высота.' />
        <ButtonShowMoreWhiteDecla title='Преимущества грузоперевозок сборных грузов ж/д транспортом'
          text='Ж/д перевозка сборных грузов из Китая имеет стабильную популярность, благодаря ряду факторов:
          развитая сеть железнодорожных магистралей;
          высокая пропускная способность ж/д станций;
          отсутствие рисков по срыву сроков доставки вследствие климатических условий;
          использование различного типа составов.
          ' />
        <ButtonShowMoreWhiteDecla title='Недостатки перевозок сборных грузов ж/д транспортом'
          text='Для перевозок сборных грузов имеется несколько недостатков:
          необходимость перегрузки контейнера в случае сборных контейнерных грузоперевозок;
          отсутствие возможности быстрой замены транспорта при возникновении непредвиденных ситуаций;
          ограничения на перевозку некоторых видов товаров;
          необходимость соблюдения принципов несовместимости разных товаров в одном контейнере/вагоне.' />
        <ButtonShowMoreWhiteDecla title='Перечень товаров, которые не принимаются к перевозке в составе сборных грузов:'
          text='наркотические вещества;
          легковоспламеняющиеся вещества;
          химические вещества (отдельных классов опасности);
          радиоактивные вещества;
          животные;
          живые растения;
          скоропортящиеся товары;
          ряд лекарственных препаратов и другие.
          ' />
      </div>
    </div>
  )
}