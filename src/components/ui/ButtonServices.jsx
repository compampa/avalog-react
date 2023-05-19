import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonServices({ items }) {
  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div className="col-md-4 " key={item.path}>
            <Link
              to={`/${item.path}`}
              className="btn btn-primary button-service"
              style={{
                textDecoration: 'none',
                fontSize: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '30px',
                backgroundColor: 'transparent',
                color: 'white',
                border: 'none',
              }}
            >
              <div style={{ width: '150px', height: '150px', marginBottom: '10px' }}>
                <img src={`./icons/services/${item.imgURL}`} alt="arrow" className='btn-service rounded' style={{ height: '100%' }} />
              </div>
              <div style={{ textAlign: 'center', maxWidth: '150px' }}>{item.text}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
