import { NavBar } from "./components/navbar/NavBar"
import { Routers } from "./components/Routers/Routers"
import { Search } from "./components/search/Search"
import { ViewProvider } from "./context/ViewProvider"
import { useFetchSearch } from "./hooks/useFetchSearch"

function App() {
   const {setSearchKey, moviesSearch, tvSeriesSearch}= useFetchSearch()
   
  return (
    <ViewProvider>
      <div className="relative w-full flex">
          <NavBar/>
          <Search setSearchKey = {setSearchKey}/>
          <Routers moviesSearch = {moviesSearch} tvSeriesSearch = {tvSeriesSearch} /* content = {content} *//>
      </div>
    </ViewProvider>
  )
}

export default App
