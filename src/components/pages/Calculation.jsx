import React from 'react'

export default function Calculation() {
  return (
    <div >
      <div style={{ backgroundImage: 'url(./icons/background/faq.svg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '525px' }}>
        <div className="container text-white" style={{ width: '1000px', marginBottom: '250px' }}>
          <h1 className='bold-text py-5' style={{ fontSize: '34px' }}>Расчет ставки</h1>
        </div>
      </div>
      <div className="container text-white my-5" style={{ width: '1000px' }}>
        <iframe src="https://www.alta.ru/currency/graph_frame/?code[]=840&code[]=978&code[]=156&min=19&max=19" height="495" style={{ border: "1px solid #333", width: "1000px" }} />
      </div>
    </div>
  )
}
