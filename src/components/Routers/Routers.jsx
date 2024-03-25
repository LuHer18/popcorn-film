import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
/* import { Home } from '../../pages/Home' */  //De momento sin funcionalidad (primera versión)
import { Peliculas } from '../../pages/Peliculas'
import { Series } from '../../pages/Series'
import { SearchPages } from '../../pages/SearchPages'
import { Contenido } from '../../pages/Contenido'



export const Routers = ({moviesSearch, tvSeriesSearch}) => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to = '/peliculas'/>} />
        <Route path="/peliculas" element={<Peliculas/>} />
        <Route path="/series" element={<Series />} />
        <Route path="/search" element={<SearchPages moviesSearch={moviesSearch} tvSeriesSearch={tvSeriesSearch}/>} />
        <Route path="/contenido/:id" element={<Contenido/>} />
        <Route path="*" element={<Navigate to = '/peliculas'/>} />

    </Routes>
  )
}
