import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { ViewContext } from '../../context/ViewContext'
export const CardSearch = ({title,image, id, overview, type}) => {
  const {handleContent} = useContext(ViewContext)
  const IMG_URL = 'https://image.tmdb.org/t/p/original'
  const post = `${IMG_URL}${image}`
  const navigate = useNavigate()
  const onClick = ()=> {
    handleContent(id, title, post, overview, type)
    navigate(`/contenido/${id}`)
  }
  return (
    <li className='h-80 w-44 flex flex-col gap-3 hover:text-white'>
        <figure className='h-[264px] w-44 '>
            <img onClick={onClick} className=' h-full hover:scale-110 cursor-pointer w-full rounded-md' src={post} alt={title} />
            
        </figure>
        <p className=' text-start'>{title}</p>

    </li>
  )
}
