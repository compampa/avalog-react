import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonDropdown( {items}) {
  return (
    <div className="dropdown-menu" style={{borderRadius: '30px', backgroundColor:'#D9D9D9'}}>
      {items.map((el, index) => (
        <Link
          style={{
            borderBottom: index === items.length - 1 ? 'none' : '1px solid black',
            borderTopLeftRadius: index === 0 ? '30px' : '0',
            borderTopRightRadius: index === 0 ? '30px' : '0',
            borderBottomLeftRadius: index === items.length - 1 ? '30px' : '0',
            borderBottomRightRadius: index === items.length - 1 ? '30px' : '0',
          }}
          to={`/services/${el.path}`}
          className="dropdown-item"
          key={el.path}
        >
          {el.name}
        </Link>
      ))}
    </div>
  )
}
