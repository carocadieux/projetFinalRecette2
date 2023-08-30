import {Route, Routes} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient()

function App() {
  const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route path='/pokemon/:name' element={<Pokemon />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
