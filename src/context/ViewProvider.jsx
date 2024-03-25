import React, { useState, useEffect } from 'react'
import { ViewContext } from './ViewContext'

const URL_API = import.meta.env.VITE_URL_API
const API_KEY = import.meta.env.VITE_API_KEY


export const ViewProvider = ({children}) => {
    const [content, setContent] = useState({
        id: '1011985',
        title: "Kung Fu Panda 4",
        post: "https://image.tmdb.org/t/p/original/wkfG7DaExmcVsGLR4kLouMwxeT5.jpg",
        overview: "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
        type: 'movie'
    })
    const [state, setState] = useState({
        videos: [],
        isLoading: true,
        error: null
    })
    const urlVideo = `${URL_API}/${content.type}/${content.id}/videos?api_key=${API_KEY}`

    useEffect(() => {
        const fetchData = async (url) => {
            try {
                const response = await fetch(url);
                await new Promise(resolve => setTimeout(resolve, 1000));

                if (!response.ok) {
                    throw new Error(`${response.status} - ${response.statusText}`);
                }

                const responseData = await response.json();
                const trailer = responseData.results.find((vid)=> vid.name.includes('Official Trailer') )
                setState(prevData => ({
                    ...prevData,
                    videos: trailer? trailer:responseData.results[0],
                    isLoading: false,
                    error: null
                }));
            } catch (error) {
                setState(prevData => ({
                    ...prevData,
                    isLoading: false,
                    error: error.message
                }));
            }
        };

        fetchData(urlVideo);
    }, [urlVideo]);





    const handleContent = (id, title, post, overview, type) => {
        setContent({
            id: id,
            title: title,
            post: post,
            overview: overview,
            type
        })
    }

  return (
    <ViewContext.Provider value={{content, handleContent, videos: state.videos}}>
        {children}
    </ViewContext.Provider>
  )
}
