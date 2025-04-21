import { useState } from 'react'

import { Container } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'

function App() {
  const [searchInput, setSearchInput] = useState("");

  return (<Container maxW={2000}>
    <Navbar searchInput={searchInput} setSearchInput={setSearchInput} />
    <Dashboard searchInput={searchInput} />
  </Container>
  )
}

export default App
