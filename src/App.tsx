import { Container } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'

function App() {
  return (<Container maxW={1680}>
    <Navbar />
    <Dashboard />
  </Container>
  )
}

export default App
