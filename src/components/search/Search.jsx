import React, { useState } from 'react'
import { useNavigate, } from 'react-router-dom'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'


export const Search = ({ setSearchKey }) => {
  const [value, setValue] = useState('')
  const navigate = useNavigate();
  const onChangeValue = (e) => {
    setValue(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    setSearchKey(value)
    if (value === '') return
    navigate('/search')
  }
  const onReset = () => {
    setValue('')
    navigate(-1)
  }
  

  return (
    <div className=' w-full flex h-14 md:fixed p-3 absolute bg-slate-600 gap-2 justify-center md:w-[50%]  md:top-0 md:right-0'>
      <form onSubmit={(e) => onSubmit(e)} className='flex gap-1' >
        <input className='p-1 rounded-md outline-none text-sm bg-slate-300 text-slate-500 ' type="text" placeholder='titulo, personaje' value={value} onChange={onChangeValue} />
        <button><MagnifyingGlassIcon className='w-6 h-6' /></button>
      </form>
      {
        (value!== '')?<button onClick={onReset}><XMarkIcon className='w-6 h-6' /></button>:<div className='w-6 h-6'></div>
      }
      
    </div>
  )
}
