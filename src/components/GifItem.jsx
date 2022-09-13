import React from 'react'

export const GifItem = ({id, title, img}) => {
  return (
    <div className='card'>
        <img src={img} alt={title} />
        <p>{title}</p>
    </div>
  )
}
