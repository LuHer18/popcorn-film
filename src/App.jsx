import { NavBar } from "./components/navbar/NavBar"
import { Routers } from "./components/Routers/Routers"
import { Search } from "./components/search/Search"

function App() {
  
  return (
    
      <div className="relative w-full flex">
          <NavBar/>
          <Search/>
          <Routers/>
      </div>
  )
}

export default App
