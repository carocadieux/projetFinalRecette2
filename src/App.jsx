import {Route, Routes} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import Categories from './recettes/components/Categories'

const queryClient = new QueryClient()

function App() {
  

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Categories />} />
        
      </Routes>
    </QueryClientProvider>
  )
}

export default App
