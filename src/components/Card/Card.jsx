import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { CardInfo } from './CardInfo'
import { CardLoading } from './CardLoading'

export const Card = ({title, image }) => {
    const IMG_URL = 'https://image.tmdb.org/t/p/original'
    const post = `${IMG_URL}${image}`
    const {isLoading} = useFetch()
  return (
    <>
    {
        (!isLoading)?<CardInfo title={title} image={post} ></CardInfo>:<CardLoading/>
    }
    </>
    
  )
}
