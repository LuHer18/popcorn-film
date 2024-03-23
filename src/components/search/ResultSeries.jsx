import React from 'react'
import { CardSearch } from './CardSearch'

export const ResultSeries = ({tvSeriesSearch,resultSeriesSearch}) => {
  return (
    <>
    {
            (resultSeriesSearch===0)&&(
                <p>No se han encontrado resultados de tu busqueda</p>
            )
        }
    <ul className='flex justify-center mx-2 w-full gap-2 flex-wrap' >
    {
      tvSeriesSearch.map(tvSerieSearch => (
        <CardSearch key={tvSerieSearch.id} title={tvSerieSearch.name} id={tvSerieSearch.id} overview ={tvSerieSearch.overview} image={tvSerieSearch.poster_path} />
      ))
    }
  </ul>
  </>
  )
}
