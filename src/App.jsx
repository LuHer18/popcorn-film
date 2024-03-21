import { NavBar } from "./components/navbar/NavBar"
import { Routers } from "./components/Routers/Routers"
import { Search } from "./components/search/Search"
import { useFetchSearch } from "./hooks/useFetchSearch"

function App() {
   const {setSearchKey, moviesSearch}= useFetchSearch()
  return (
    
      <div className="relative w-full flex">
          <NavBar/>
          <Search setSearchKey={setSearchKey}/>
          <Routers moviesSearch={moviesSearch}/>
      </div>
  )
}

export default App
