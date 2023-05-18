// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function ButtonServices( {items} ) {
//   return (
//     <div>
      
//       {items.map((item) => 
//         <Link to={`/services/${item.path}`} 
//         key={item.path}
//         <img src=`{./icons/services/${item.imgURL}}` alt='arrow'/>'
//         style={{backgroundImage: `url(./icons/services/${item.imgURL})`}} >О компании</Link>
//       )}
//     </div>
//   )
// }

import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonServices({ items }) {
  return (
    <div>
      {items.map((item) => (
        <Link to={`/services/${item.path}`} key={item.path}>
          <img src={`./icons/services/${item.imgURL}`} alt="arrow" />
          О компании
        </Link>
      ))}
    </div>
  );
}
