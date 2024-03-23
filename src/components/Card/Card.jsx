import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { CardInfo } from './CardInfo'
import { CardLoading } from './CardLoading'

export const Card = ({title, image, id, overview, }) => {
    const IMG_URL = 'https://image.tmdb.org/t/p/original'
    const post = `${IMG_URL}${image}`
    const {isLoading} = useFetch()
    
  return (
    <>
    {
        (!isLoading)?<CardInfo id={id} title={title} overview={overview} post={post} ></CardInfo>:<CardLoading/>
    }
    </>
    
  )
}
