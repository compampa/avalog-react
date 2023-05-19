import React from 'react'

export default function FormCalculationSm() {
  return (
    <form>
      <div className="row mb-3">
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
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-light mt-3">Отправить</button>
      </div>
    </form>
  )
}
