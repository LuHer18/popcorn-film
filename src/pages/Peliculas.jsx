import React from 'react'
import { Layout } from '../layout/Layout'
import { useFetch } from '../hooks/useFetch'
import { Card } from '../components/Card/Card'

export const Peliculas = () => {
  const { movies, } = useFetch()
  return (
    <Layout>
      <article className='flex flex-col justify-center px-4 items-center'>
        <h1 className='py-3'>Peliculas</h1>
        <ul className='flex justify-center mx-2 w-full gap-2 flex-wrap'>
          {
            movies.map(movie => (
              <Card key={movie.id} title={movie.title} id={movie.id} overview={movie.overview} type={'movie'} image={movie.poster_path} />
            ))
          }
        </ul>
      </article>
    </Layout>
  )
}
