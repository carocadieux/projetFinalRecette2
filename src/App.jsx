import {Route, Routes} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import Categories from './recettes/components/Categories'
import Categorie from './recettes/components/Categorie'
import Meals from './recettes/components/Meals'

const queryClient = new QueryClient()

function App() {
  

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path='/categorie/:name' element={<Categorie />} />
        <Route path='/categorie/:name/meals' element={<Meals />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
