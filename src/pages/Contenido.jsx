import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { ViewContext } from '../context/ViewContext'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'
import { PlayIcon } from '@heroicons/react/24/solid'
import { CardVideo } from '../components/CardVideo/CardVideo'

export const Contenido = () => {
  const { content, videos } = useContext(ViewContext)
  const [isPlaying, setIsPlaying] = useState(false)
  const navigate = useNavigate()

  const play = () => {
    setIsPlaying(true)

  }
  const close = () => {
    setIsPlaying(false)

  }

  return (
    <Layout>
      <div className='flex flex-col w-full'>
        <button onClick={() => navigate(-1)} className='flex m-2 w-10 h-10 pb-0 justify-center items-center rounded-full hover:bg-slate-600'><ArrowUturnLeftIcon className='w-6 h-6' /></button>
        <section className='w-full h-[790px] bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${content.post}` }}>
          <div className='flex bg-gradient-to-l w-full flex-col md:flex-row from-transparent to-slate-700 to-70%  justify-center h-[790px] p-10  md:items-start items-center gap-2 md:gap-0'>
            <figure className=' h-[264px] w-44 sm:h-[390px] sm:w-[250px] flex items-center'>
              <img className=' h-full w-full rounded-md' src={content.post} alt={content.title} />
            </figure>
            <div className='flex md:px-6 flex-col flex-wrap w-full md:w-1/2 gap-2'>
              <h1 className='w-full md:text-5xl text-3xl '>{content.title}</h1>
              <div className='flex flex-col content-center'>
                <p>Resumen</p>
                <p className='text-xs w-full'>{content.overview}</p>
              </div>
              <div className='flex flex-col'>
                <button onClick={play} className='flex mt-3 gap-1 w-32 h-10 bg-slate-300 hover:bg-white text-slate-700 rounded-lg items-center'><PlayIcon className='h-6 w-6' />Reproducir</button>
              {
                isPlaying? 
                  <CardVideo videos={videos} close={close} />:
                  <div className='w-[300px] h-[180px] md:w-[640px] md:h-[390px] '></div>
                
              }
                </div>
            </div>
          </div>
        </section>

      </div>

    </Layout>
  )
}
