import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonServices({ items }) {
  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div className="col-md-4" key={item.path}>
            <Link
              to={`/services/${item.path}`}
              className="button-service"
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '30px',
              }}
            >
              <div style={{ height: '100px', marginBottom: '10px' }}>
                <img src={`./icons/services/${item.imgURL}`} alt="arrow" style={{ height: '100%' }} />
              </div>
              <div style={{ textAlign: 'center', maxWidth: '150px' }}>{item.text}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
