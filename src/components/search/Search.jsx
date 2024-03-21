import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {MagnifyingGlassIcon} from '@heroicons/react/24/solid'

import { useFetchSearch } from '../../hooks/useFetchSearch'

export const Search = ({setSearchKey}) => {
  const [value, setValue] = useState('')
  const navigate = useNavigate();
  /* const {setSearchKey} = useFetchSearch() */
  const onChangeValue = (e) => {
    setValue(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    /* handleSearchValue(value) */
    setSearchKey(value)
    navigate('/search')
    
    
    
  }

  return (
    <div className=' w-full flex h-14 md:fixed p-3 absolute bg-slate-600  justify-center md:w-[50%]  md:top-0 md:right-0'>
      <form onSubmit={(e)=> onSubmit(e)} className='flex gap-1' >
        <input className='p-1 rounded-md outline-none text-sm bg-slate-300 text-slate-500 ' type="text" placeholder='titulo, personaje' value={value} onChange={onChangeValue}/>
        <button><MagnifyingGlassIcon className='w-6 h-6'/></button>
      </form>
    </div>
  )
}
