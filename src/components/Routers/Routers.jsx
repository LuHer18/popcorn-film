import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Home } from '../../pages/Home'
import { Peliculas } from '../../pages/Peliculas'
import { Series } from '../../pages/Series'


export const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/peliculas" element={<Peliculas/>} />
        <Route path="/series" element={<Series/>} />
    </Routes>
  )
}
