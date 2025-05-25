import './App.css'
import { useState } from 'react'
import { useCoins } from './Types/Coin'
import CoinList from './Components/CoinList'
import SearchBar from './Components/SearchBar'
import Loader from './Components/Loader'
import ErrorMessage from './Components/ErrorMessage'

function App() {

  const { coins, loading, error } = useCoins();
  const [search, setSearch] = useState("")

  const filtered = coins.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.symbol.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <>
      <div>
        <header>
          <h1>
            Crypto Dashboard
          </h1>
  
        </header>
        <SearchBar value={search} onChange={setSearch} />
        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && <CoinList coins={filtered} />}
      </div>
    </>
  )
}

export default App
