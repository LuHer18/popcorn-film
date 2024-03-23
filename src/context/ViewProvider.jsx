import React, { useState } from 'react'
import { ViewContext } from './ViewContext'

export const ViewProvider = ({children}) => {
    const [content, setContent] = useState({
        id: '1011985',
        title: "Kung Fu Panda 4",
        post: "https://image.tmdb.org/t/p/original/wkfG7DaExmcVsGLR4kLouMwxeT5.jpg",
        overview: "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past."
    })
    const handleContent = (id, title, post, overview) => {
        setContent({
            id: id,
            title: title,
            post: post,
            overview: overview
        })
    }

  return (
    <ViewContext.Provider value={{content, handleContent}}>
        {children}
    </ViewContext.Provider>
  )
}
