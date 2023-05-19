import React from 'react'

export default function FormCalculationSm() {
  return (
    <form>
    <div className="row">
      <div className="col">
          <input name='FIO' type="text" className="form-control" placeholder="ФИО" aria-label="ФИО" />
      </div>
      <div className="col">
          <input name='phone' type="text" className="form-control" placeholder="Телефон" aria-label="Телефон" />
      </div>
      <div className="col">
        <input name='email' type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" />
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Отправить</button>
    </form>
  )
}
