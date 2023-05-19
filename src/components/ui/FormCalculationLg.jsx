import React from 'react';

export default function FormCalculationLg() {
  return (
    <form >
    <div className="row gx-5">
      <div className="col" >
        <input required name='FIO' type="text" className="form-control rounded-4" placeholder="ФИО*" aria-label="ФИО" />
        <input required name="data" type="text" className="form-control rounded-4 my-2" placeholder="Дата отгрузки*" aria-label="Дата отгрузки" />
        <input required name="container" type="text" className="form-control rounded-4" placeholder="Тип контейнера*" aria-label="Тип контейнера" />
        <input name="border" type="text" className="form-control rounded-4 mt-2" placeholder="Таможенный режим" aria-label="Таможенный режим" />
      </div>
      <div className="col">
        <input required id='phone' type="text" className="form-control rounded-4" placeholder="Телефон*" aria-label="Телефон" />
        <input required name="departure" type="text" className="form-control rounded-4 my-2" placeholder="Пункт отправления*" aria-label="Пункт отправления" />
        <input name="cargo" type="text" className="form-control rounded-4" placeholder="Тип груза" aria-label="Тип груза" />
        <input name="auto" type="text" className="form-control rounded-4 my-2" placeholder="Автовызов" aria-label="Автовызов" />
      </div>
      <div className="col">
        <input required id='email' type="text" className="form-control rounded-4" placeholder="E-mail*" aria-label="E-mail" />
        <input required name="appointment" type="text" className="form-control my-2 rounded-4" placeholder="Пункт назначения*" aria-label="Пункт назначения" />
        <input name="containerOwner" type="text" className="form-control rounded-4" placeholder="Собственник контейнера" aria-label="Собственник контейнера" />
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <button type="submit" className="btn btn-light rounded-4" style={{width:'40%'}}>Отправить</button>
      </div>
    </div>
    </form>
  );
}

