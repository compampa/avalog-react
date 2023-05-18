import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonServices( items ) {
  return (
    <div>
      {items.map(item) => {
        <Link to={`/services/${item.path}`} key={item.path} style={{backgroundImage: `url(./icons/services/${item.imgURL})`}}></Link>
      }}
    </div>
  )
}


{/* {items.map((item) => {
       <Link to={`/services/${item.path}`} key={item.path} style={{backgroundImage: `url(./icons/services/${item.imgURL})`}}></Link>
    )} */}