import './App.css'
import { Header } from "./components"
import { GatheringList } from "./components/GatheringList.tsx";
import { Container } from '@mui/material';

function App() {
  return (
    <>
      <Header/>
      <Container
        sx={{ mt: '8px' }}
      >
        <GatheringList/>
      </Container>
    </>
  )
}

export default App
