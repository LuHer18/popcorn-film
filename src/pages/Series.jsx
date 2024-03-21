import React from 'react'
import { Layout } from '../layout/Layout'
import { useFetch } from '../hooks/useFetch'
import { Card } from '../components/Card/Card'

export const Series = () => {
  const {tvSeries,} = useFetch()
  return (
    <Layout>
        <article className='flex flex-col justify-center items-center'>
          <h1 className='py-3'>Series</h1>
          <ul className='flex justify-center mx-2 w-full gap-2 flex-wrap'>
            {
              tvSeries.map(tvSerie => (
                <Card key={tvSerie.id} title={tvSerie.name} image = {tvSerie.poster_path} />
              ))
            }
          </ul>
      </article>
    </Layout>
  )
}
