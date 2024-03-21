import React from 'react'
import { Layout } from '../layout/Layout'
import { useFetchSearch } from '../hooks/useFetchSearch'

export const SearchPages = ({moviesSearch}) => {
/*     const {moviesSearch} = useFetch();
    console.log(moviesSearch) */
/*      const {moviesSearch} = useFetchSearch()*/
     console.log(moviesSearch.map(movie=> movie.id)) 
  return (
    <Layout>
        <div>Resultados</div>
        <ul>
          {
            moviesSearch.map(movieSearch => (
              <li key={movieSearch.id}> <p>{movieSearch.id}</p></li>
            ))
          }
        </ul>
    </Layout>
  )
}
