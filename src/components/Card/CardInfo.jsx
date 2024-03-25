import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ViewContext } from '../../context/ViewContext'
export const CardInfo = ({ title, post, id, overview, type}) => {
  const navigate = useNavigate()
  const {handleContent} = useContext(ViewContext)
  const onClick = () => {
    handleContent(id, title, post, overview, type)
    navigate(`/contenido/${id}`)
  }
  return (
    <li className='h-80 w-44 flex flex-col gap-3 hover:text-white'>
      <figure className='h-[264px] w-44 '>
        <img onClick={()=>onClick()} className='h-full hover:scale-110 w-full cursor-pointer rounded-md' src={post} alt={title} />
      </figure>
      <p className=' text-start'>{title}</p>

    </li>
  )
}
