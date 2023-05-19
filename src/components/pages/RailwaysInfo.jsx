import React from 'react'
import ButtonShowMoreWhite from '../ui/ButtonShowMoreWhite'

export default function RailwaysInfo() {
  return (
    <div >
      <div className="container text-white mt-5" style={{ width: '1000px', marginBottom: '50px', marginLeft: '300px' }}>
        <h1 className='bold-text' style={{ fontSize: '54px' }}>Железнодорожные перевозки</h1>
      </div>
      <div className='mb-5' style={{ fontSize: '20px' }}>
        <ButtonShowMoreWhite title='Какие вагоны подходят для перевозки лесных грузов?'
          text='Для перевозки лесных грузов подходят различные виды вагонов: полувагоны, крытые вагоны, платформы (универсалки и рогатки). Выбор вагона зависит от пожеланий заказчика.' />
        <ButtonShowMoreWhite title='Почему я не могу получить информацию о контейнере?'
          text='Существует несколько причин, согласно которым вы не можете получить точную информацию о контейнере в данный момент. Возможно, вы не указали:
          — кто является грузополучателем;
          — адрес доставки;
          — положение контейнера.
          Без этой информации крайне сложно адекватно ответить на любые вопросы о текущем местоположении контейнера.' />
        <ButtonShowMoreWhite title='Какие существуют правила крепления грузов в крупнотонажных контейнерах?'
          text='Правила крепления грузов в крупнотоннажных контейнерах зафиксированы в параграфе 12 (Технические условия размещения и крепления грузов в вагонах и контейнерах" (утв. МПС РФ 27.05.2003 N ЦМ-943)).
          В зависимости от грузоподъемности контейнера, габаритов каждого грузового места и характера груза товары должны размещаться и закрепляться таким образом, чтобы обеспечивалась максимальная сохранность груза в процессе транспортировки, а также соблюдались нормы распределения груза по полу контейнера и по его стенкам. Для отправки по РФ в контейнерах, где вес одного грузового места превышает 1500 кг, должно быть обеспечено крепление груза в соответствии с согласованной и утвержденной схемой крепления груза. Используются самые разные способы крепления груза: установка деревянных щитов/, стягивание проволокой разных диаметров и т. д.
          ' />
        <ButtonShowMoreWhite title='Что такое ДОПОГ?'
          text='ДОПОГ расшифровывается как Дорожная Перевозка Опасных Грузов.
          Это международный документ согласованный и утверждённый в Европе более полувека назад. Главной задачей ДОПОГ является регулирование перевозок опасных грузов автомобильным транспортом.
          ДОПОГ содержит в себе свод правил и указаний необходимых к соблюдению для успешной и безопасной перевозки грузов, которые могут оказать пагубное воздействие на окружающую среду или человека.
          Документ состоит из 7 частей:
          Общие правила и положения
          Классификация веществ
          Полный список всех грузов, относящихся к категории "опасных"
          Описание транспортировочных ёмкостей и тары для перевозок
          Этапы и процедуры, необходимые для оформления перевозки
          Требования предъявляемые к тарам и транспортировочным ёмкостям
          Требования к условиям погрузки, перевозки и приёмки опасных грузов
          Также ДОПОГ содержит инструкции и требования для водителей и сопровождающих. Перечень необходимых документов и описание конструкции транспорта, рекомендованного для перевозки опасных грузов.
          ' />
        <ButtonShowMoreWhite title='Какие виды грузов, разрешенны к перевозке по ЖД?'
          text='ЖД транспорт является достаточно универсальным и позволяет перевозить практически любые грузы, так называемые , генеральные. К перевозке по жд принимаются любые генеральные не опасные грузы, габариты грузовых мест не должны превышать 3 метра, масса одного места не более 1500 кг. В противном случае необходимо дополнительное согласование со станцией. Иными словами, если груз не включён в перечень запрещенных к жд перевозке или не требует специальных условии перевозки, то его по жд перевозить можно. К перечню грузов, запрещенных к перевозке, относятся грузы, представляющие опасность для людей и окружающей среды (химическая и нефтехимическая продукция, пиротехника, оружие, наркотики, невыделанные шкуры животных) либо теряющие свое качество в процессе перевозки (мясо, рыбо, молочнная продукция, замороженные овощи и фрукты требуют перевозки с соблюдением температурного режима, а также кондитерские изделия на основе масляного крема).' />
        <ButtonShowMoreWhite title='Плюсы и минусы ЖД перевозок'
          text='К очевидным плюсам жд перевозок можно отнести следующее:
          Довольно низкая стоимость доставки по сравнению с авиационным и автомобильным транспортом. Эта разница выглядит все более внушительной по мере увеличения расстояния от пункта отправки до пункта назначения.
         Отсутствие зависимости от неблагоприятных погодных условии. Если есть качественное дорожное полотно по всему маршруту следования, груз будет доставлен своевременно.
         Можно перевезти практически любой груз, надлежащим образом упакованный
         К минусам ЖД перевозок относятся:
         Невысокая скорость доставки
         Ограниченность железнодорожного полотна и, как следствие, необходимость обеспечивать доставку груза иными видами транспорта до жд станций
         ' />
        <ButtonShowMoreWhite title='Возможно ли совмещение ЖД с другими видами транспорта?'
          text='Железнодорожный вид транспорта универсален для перевозок грузов в универсальных транспортных единицах на больших расстояниях, что особенно актуально на территории нашего государства. Наиболее часто жд транспорт комбинируется с морской перевозкой, когда часть маршрута осуществляется по морю, а другая – по железной дороге (как правило, с использованием контейнеров). Также зачастую груз доставляется в вагонах к порту, где осуществляется перетарка в морские контейнеры для дальнейшей отправки по морю. Также жд транспорт комбинируется с автомобильным транспортом,- наиболее часто используется, когда часть маршрута проходит по морю, а другая автомобильным транспортом с целью обеспечения довоза до склада получателя на контейнерной автомобильной площадке.' />
        <ButtonShowMoreWhite title='Для чего нужны ж/д транспортеры?'
          text='Транспортеры - это специальный подвижной состав, используемый для перевозки негабаритных и тяжеловесных грузов.
          Транспортеры используют с целью понижения степени негабаритности груза или в тех случаях, когда размещение на другом подвижном составе невозможно по техническим параметрам, угрожает сохранности вагона и безопасности движения.
          Использование транспортеров для перевозки грузов значительно увеличивает стоимость перевозки. Возможно, есть более выгодные по стоимости варианты перевозки, предлагаем обсудить их совместно – свяжитесь с нами.' />
        <ButtonShowMoreWhite title='Как определить код груза?'
          text='Определение кода груза при отправке по ж/д производится на основании данных о грузе, документов на него и разъясняющих телеграмм ОАО «РЖД».
          При расчете ж/д тарифа следует знать код груза ЕТСНГ – единой тарифной системы номенклатуры грузов, - в ней грузы делятся на классы и группы.
          Каждому типу груза соответствует свой шестизначный код. Кроме этого, при отправке из России в другие страны Вы столкнетесь с таможенной классификацией – коды ТНВЭД, - и ГНГ – гармонизированной номенклатурой грузов.
          ' />
        <ButtonShowMoreWhite title='Какой груз является негабаритным?'
          text='Грузы, подлежащие перевозке на открытом подвижном составе на общих условиях в пределах сети железных дорог колеи 1520 мм государств-участников СНГ, Латвийской Республики, Литовской Республики, Эстонской Республики не должны превышать очертание основного габарита погрузки. Груз, погруженный на одиночный вагон или сцеп из двух вагонов, является габаритным, если он ни одной своей частью, включая упаковку и крепление, не выходит за пределы основного габарита погрузки и расстояние от поперечной плоскости симметрии вагона (либо сцепа) до концов груза не превышает значений, указанных в таблице 5 Главы 1 Правил, при условии нахождения вагона на прямом горизонтальном участке пути и совмещения продольной вертикальной плоскости симметрии вагона с осью железнодорожного пути.' />
        <ButtonShowMoreWhite title='Я самостоятельно рассчитал дату прибытия контейнера, но действительная дата прибытия не совпадает с моими расчетами. Почему так происходит?'
          text='Важно понимать, что любые расчеты относительно точной даты прибытия контейнера — примерны. В пути следования могут возникать разнообразные непредвиденные ситуации (включая особенности погодных условий), влияющие на сроки доставки. Неразумно полагать, что вы можете предугадать реальную дату прибытия контейнера.' />
        <ButtonShowMoreWhite title='Как безопаснее всего провезти сыпучий груз?'
          text='Наиболее безопасный и современный способ - перевозка сыпучих грузов во вкладышах в полувагоны и контейнеры. Они полностью герметичны, защищают груз от выдувания и потери части груза через щели в конструкции полувагона. Вкладыши идеально подходят для перевозки зерновых культур. К тому же, это наиболее дешевый вариант по сравнению со специализированными вагонами. Защищает груз от контакта со стенками вагона, процесс выгрузки значительно упрощается, нет прилипания продукта к стенкам полувагона. Защищает груз от загрязнений во время транспортировки и атмосферных осадков.' />
        <ButtonShowMoreWhite title='Какие грузы подлежат обязательной обрешетке?'
          text='грузы, имеющие острые выступающие детали;
          любая жидкость в любой упаковке;
          не упакованные металлические изделия и металлопрокат;
          любая мягкая мебель;
          мебель, содержащая стеклянные и пластиковые детали;
          хрупкие предметы интерьера (люстры, вазы, зеркала, скульптуры и т.п);
          лодки, катера, снегоходы, гидроциклы, квадроциклы, мотоциклы;
          изделия из стекла, керамики, фарфора, фаянса, иных хрупких материалов' />
        <ButtonShowMoreWhite title='Типы ЖД перевозок'
          text='В настоящий момент существует несколько видов жд перевозок в зависимости от вида подвижного состава:
          Контейнерная (универсальные единицы: 20 фут. ктк, 40 фут. ктк)
          Вагонная (отправка в крытых вагонах, на платформах различных видов, в полувагонах)' />
        <ButtonShowMoreWhite title='Документы для ЖД перевозок'
          text='Транспортная железнодорожная накладная 
          Вагонный лист 
          Дорожная ведомость 
          Корешок дорожной ведомости 
          Квитанция о приеме груза ' />
      </div>
    </div>
  )
}
