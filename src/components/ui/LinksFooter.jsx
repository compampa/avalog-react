import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function LinksFooter() {
  const { pathname } = useLocation();

  return (
    <div className='bg-white' >
      <div className={`container d-flex align-items-center py-5 ${pathname === '/services' ? ' justify-content-center' : ' justify-content-between'}`} >
        <a href="tel:+79309996347">
          <img src="./icons/buttons/consultation.svg" alt="consult" />
        </a>
        {pathname !== '/services' &&
          <Link to='/services'>
            <img src="./icons/buttons/calculate.svg" alt="calc" />
          </Link>
        }
      </div>
    </div >
  )
}
