import { useEffect, useState } from 'react'

const URL_API = 'https://api.themoviedb.org/3/'
const API_KEY = '36830da011d1cdf91017bdae4792eab3'

const urlMovie = `${URL_API}/discover/movie?api_key=${API_KEY}`
const urlTv = `${URL_API}/discover/tv?api_key=${API_KEY}`



export const useFetch = () => {
    const [data, setData] = useState({
        movies: [],
        tvSeries: [],
        isLoading: true,
        error: null
    });
    /* console.log(data.movies) */

    useEffect(() => {
        const fetchData = async (url, setDataKey) => {
            try {
                const response = await fetch(url);
                await new Promise(resolve => setTimeout(resolve, 1000));

                if (!response.ok) {
                    throw new Error(`${response.status} - ${response.statusText}`);
                }

                const responseData = await response.json();
                setData(prevData => ({
                    ...prevData,
                    [setDataKey]: responseData.results,
                    isLoading: false,
                    error: null
                }));
            } catch (error) {
                setData(prevData => ({
                    ...prevData,
                    isLoading: false,
                    error: error.message
                }));
            }
        };

        fetchData(urlMovie, 'movies');
        fetchData(urlTv, 'tvSeries');
    }, [urlMovie, urlTv]);



    return {
        movies: data.movies,
        tvSeries: data.tvSeries,
        isLoading: data.isLoading,

    }
}
