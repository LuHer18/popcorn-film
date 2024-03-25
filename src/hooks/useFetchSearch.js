import { useState, useEffect } from 'react'
const URL_API = import.meta.env.VITE_URL_API
const API_KEY = import.meta.env.VITE_API_KEY

export const useFetchSearch = () => {
    const [searchKey, setSearchKey] = useState('')
    const [dataSearch, setDataSearch] = useState({
        moviesSearch: [],
        tvSeriesSearch: [],
        isLoading: true,
        error: null
    });

    const urlMovieSearch = `${URL_API}/search/movie?query=${searchKey}&api_key=${API_KEY}`
    const urlTvSeriesSearch = `${URL_API}/search/tv?query=${searchKey}&api_key=${API_KEY}` 

    useEffect(() => {
        const fetchData = async (url, setDataKey) => {
            try {
                const response = await fetch(url);
                await new Promise(resolve => setTimeout(resolve, 1000));

                if (!response.ok) {
                    throw new Error(`${response.status} - ${response.statusText}`);
                }

                const responseData = await response.json();
                setDataSearch(prevData => ({
                    ...prevData,
                    [setDataKey]: responseData.results,
                    isLoading: false,
                    error: null
                }));
            } catch (error) {
                setDataSearch(prevData => ({
                    ...prevData,
                    isLoading: false,
                    error: error.message
                }));
            }
        };

        fetchData(urlMovieSearch, 'moviesSearch');
        fetchData(urlTvSeriesSearch, 'tvSeriesSearch');
    }, [urlMovieSearch, urlTvSeriesSearch]);
    


  return {
    setSearchKey,
    moviesSearch: dataSearch.moviesSearch,
    tvSeriesSearch: dataSearch.tvSeriesSearch,
    
  }
}
