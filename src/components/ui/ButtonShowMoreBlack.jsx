import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function ButtonShowMoreWhite({ title, text }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='container mb-2' style={{ backgroundColor: '#2C2929', borderRadius: '15px' }
    }>
      <div className="d-flex flex-direction-row justify-content-between align-items-center mx-3">
        <h3 style={{ color: 'white', }}>{title}</h3>
        <Button onClick={toggleExpand} variant="link" className="mb-2">
          {isExpanded
            ? <img src='./icons/buttons/arrow-white.svg' alt="white" style={{ transform: 'rotate(180deg)' }} />
            : <img src='./icons/buttons/arrow-white.svg' alt="white" />
          }
        </Button>
      </div>

      {isExpanded && <p className='p-3' style={{ color: 'white', }
      }>{text}</p>}
    </div >
  );
}
