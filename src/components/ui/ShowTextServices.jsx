import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';

export default function ShowTextServices({ title, text }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='container mb-2' style={{ backgroundColor: '#fff', borderRadius: '15px', }
    }>
      <div className="d-flex flex-direction-row justify-content-between align-items-center mx-3">
        <h3 style={{ color: 'black', }}>{title}</h3>
      </div>

      <p className='p-3' style={{ color: 'black', }}>{text}</p>
    </div >
  );
}
