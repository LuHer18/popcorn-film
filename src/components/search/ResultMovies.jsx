import { CardSearch } from "./CardSearch";

export const ResultsMovies = ({moviesSearch, resultMovieSearch}) => (
    <>
        {
            (resultMovieSearch===0)&&(
                <p>No se han encontrado resultados de tu busqueda</p>
            )
        }
        <ul className='flex justify-center mx-2 w-full gap-2 flex-wrap' >
            {
            moviesSearch.map(movieSearch => (
                
                <CardSearch key={movieSearch.id} title={movieSearch.title} id={movieSearch.id} overview ={movieSearch.overview} image={movieSearch.poster_path} />
            ))
            }
        </ul>
    </>
  )