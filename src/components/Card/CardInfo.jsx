import React from 'react'

export const CardInfo = ({title, image}) => {
  return (
    <li className='h-80 w-44 flex flex-col gap-3 hover:text-white'>
        <figure className='h-[264px] w-44 '>
            <img className=' h-full w-full rounded-md' src={image} alt={title} />
            
        </figure>
        <p className=' text-start'>{title}</p>

    </li>
  )
}
