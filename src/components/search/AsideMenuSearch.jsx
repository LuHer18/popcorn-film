import React from 'react'

export const AsideMenuSearch = ({resultMovieSearch, resultSeriesSearch, changeMovieToTv, changeTvToMovie}) => {
    return (
        <aside className='flex flex-col  md:w-1/4 md:h-56 justify-center bg-slate-600 py-4 px-2 rounded-md  gap-2' >
            <div className={` flex justify-center gap-2`}>
                <button onClick={changeTvToMovie} className=' bg-sky-500 hover:bg-red-600 focus:bg-red-700 p-1 h-7 w-16 rounded-md text-sm hover:scale-105'>Movies</button>
                <h2  >Resultados: <strong>{resultMovieSearch}</strong></h2>
            </div>
            <div className='flex justify-center gap-2'>
                <button onClick={changeMovieToTv} className=' bg-sky-500 hover:bg-red-600 focus:bg-red-700 p-1 h-7 w-16 rounded-md text-sm hover:scale-105'>Series</button>
                <h2>Resultados: <strong>{resultSeriesSearch}</strong></h2>
            </div>
        </aside>
    )
}
