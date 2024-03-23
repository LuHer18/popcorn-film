import React, { useState } from 'react'
import { Layout } from '../layout/Layout'
import { AsideMenuSearch } from '../components/search/AsideMenuSearch'
import { ResultsMovies } from '../components/search/ResultMovies'
import { ResultSeries } from '../components/search/ResultSeries'


export const SearchPages = ({moviesSearch, tvSeriesSearch}) => {
  const [isMovie, setisMovie] = useState(true)
  const resultMovieSearch = moviesSearch.length
  const resultSeriesSearch = tvSeriesSearch.length
  
  const changeMovieToTv =()=> {
    setisMovie(false)
  }
  const changeTvToMovie =()=> {
    setisMovie(true)
  }
  
  return (
    <Layout>
        <article className='flex py-2 flex-col w-full mx-4 items-center'>
          <h1>Resultados</h1>
          <div className='flex flex-col w-full md:flex-row md:justify-between py-4 gap-3 md:gap-0'>
            <AsideMenuSearch changeMovieToTv={changeMovieToTv} changeTvToMovie={changeTvToMovie} resultMovieSearch ={resultMovieSearch} resultSeriesSearch= {resultSeriesSearch}/>
            
            <main className='flex flex-col px-2 items-center w-full'>
              {
                (isMovie)?<ResultsMovies resultMovieSearch={resultMovieSearch} moviesSearch={moviesSearch}/>:<ResultSeries resultSeriesSearch={resultSeriesSearch} tvSeriesSearch={tvSeriesSearch}/>
              }
            </main>
          </div>
        </article>
    </Layout>
  )
}
