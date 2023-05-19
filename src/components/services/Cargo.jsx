import React from 'react'
import { Link } from 'react-router-dom'

export default function Cargo() {
  return (
    <div >
      <div style={{ backgroundImage: 'url(./icons/background/cargo.svg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '525px' }}>
        <div className="container text-white" style={{ width: '1000px', marginBottom: '250px' }}>
          <h1 className='bold-text py-5' style={{ fontSize: '34px' }}>Перевозка сборных грузов</h1>
          <p style={{ width: '700px', fontSize: '24px' }}>AVALOG предлагает оптимальные решения для перевозки небольших партий грузов из Китая и других стран Азии в Россию и далее по стране</p>
          <div className="d-flex flex-row gap-5 mt-5">
            <Link to='/services'>
              <img src="./icons/buttons/request.svg" alt="" />
            </Link>
            <Link to='/calculation'>
              <img src="./icons/buttons/calculate-black.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center text-white my-5 gap-5" >
        <img src="./icons/cargo/about.svg" alt="about" />
        <img src="./icons/cargo/about-2.svg" alt="about" />
        <img src="./icons/cargo/price.svg" alt="price" />
        <img src="./icons/cargo/price-eco.svg" alt="about" />
        <img src="./icons/cargo/reason.svg" alt="price" />
        <img src="./icons/cargo/include.svg" alt="price" />
      </div>
    </div>
  )
}
