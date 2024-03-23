import React, { useContext } from 'react'
import {useParams} from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { ViewContext } from '../context/ViewContext'
export const Contenido = () => {
  const {content} = useContext(ViewContext)
  const {id} = useParams()
  return (
    <Layout>
      <section className='w-full mt-6 h-[670px] bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url(${content.post}`}}>
        <div className='flex bg-gradient-to-l w-full flex-col md:flex-row from-transparent to-slate-700 to-70%  justify-center h-[670px] p-10  md:items-start items-center gap-2 md:gap-0'>
        <figure className=' h-[264px] w-44 sm:h-[390px] sm:w-[250px] flex items-center'>
          <img className=' h-full w-full rounded-md' src={content.post} alt={content.title} />
        </figure>
        <div className='flex md:px-6 flex-col flex-wrap w-full md:w-1/2 gap-2'>
          <h1 className='w-full md:text-5xl text-3xl '>{content.title}</h1>
            <div>
              <p>Resumen</p>
              <p className='text-xs fot'>{content.overview}</p>
            </div>
        </div>
        </div>
      </section>
    </Layout>
  )
}
