import {Route, Routes} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import Categories from './recettes/components/Categories'
import Categorie from './recettes/components/Categorie'
import Meal from './recettes/components/Meal'
import ListFavoritesMeals from './recettes/components/ListFavoritesMeals'

const queryClient = new QueryClient()

function App() {
  

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/categorie/:strCategory" element={<Categorie />} />
        <Route path="/categorie/meals/:idMeal" element={<Meal />} />
        <Route path="/categorie/"/>
        <Route path="/idMeal/listFavorite" element={<ListFavoritesMeals />} />
        
      </Routes>
    </QueryClientProvider>
  )
}

export default App
