import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div style={{backgroundColor: '#2C2929', height:'98px'}} className='d-flex justify-content-between align-items-center'>
    <nav style={{ fontSize: '18px'}} className='container d-flex justify-content-between align-items-center ' >
      <div className="logo">
        <img src='./icons/navbar/logo.svg' alt="logo" />
      </div>
        <Link to="/about" style={{textDecoration: 'none', color: 'white'}}>О компании</Link>
        <Link to="/services" style={{textDecoration: 'none', color: 'white'}}>Услуги</Link>
        <Link to="/jobs" style={{textDecoration: 'none', color: 'white'}}>Вакансии</Link>
        <Link to="/contacts" style={{textDecoration: 'none', color: 'white'}}>Контакты</Link>
        <Link to="/faq" style={{textDecoration: 'none', color: 'white'}}>F.A.Q.</Link>
        <div>
          <Link to="/" style={{fontSize: '16px', textDecoration: 'none', color: 'white'}}>ENG</Link>
          <button type='button' style={{ backgroundColor: '#2C2929', border: 'none', marginLeft: '20px'}}>
            <img src='./icons/navbar/profile.svg' alt="profile" style={{width: '54px', height: '53px', margin: '0', padding: '0' }}/>
          </button>
        </div>
    </nav>
    </div>
  )
}
