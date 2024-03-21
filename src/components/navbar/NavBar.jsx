import React from 'react'
import { NavLink } from 'react-router-dom'
import {HomeIcon} from '@heroicons/react/24/solid'
import {FilmIcon} from '@heroicons/react/24/solid'
import {TvIcon} from '@heroicons/react/24/solid'

export const NavBar = () => {
  return (
    <nav className='fixed px-4 bg-slate-600 py-3 w-full h-14 flex justify-center md:justify-start bottom-0 md:left-0 md:top-0 md:w-[50%]'>
      <ul className=' list-none flex gap-6'>
        <li>
          <NavLink className={({isActive})=>`${isActive?' text-sky-500': 'text-slate-300'} flex flex-col justify-center items-center text-xs`} to={'/'}>
            <HomeIcon className='w-6 h-6'/>
            <h3 className='hidden md:block'>Home</h3>
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=>`${isActive?' text-sky-500': 'text-slate-300'} flex flex-col justify-center items-center text-xs`} to={'/peliculas'}>
            <FilmIcon className='w-6 h-6'/>
            <h3 className='hidden md:block'>Peliculas</h3>
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=>`${isActive?' text-sky-500': 'text-slate-300'} flex flex-col justify-center items-center text-xs`} to={'/series'}>
          <TvIcon className='w-6 h-6'/>
            <h3 className='hidden md:block'>Series</h3>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
