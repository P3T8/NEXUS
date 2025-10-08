
import { Route } from 'react-router'
import { Routes } from 'react-router'

import MainPage from './pages/MainPage'
import Types from './pages/Types'
import NewNexus from './pages/NewNexus'

import 'tachyons/css/tachyons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/spaceships" element={<Types/>} />
      <Route path="/uploadspaceships" element={<NewNexus/>} />
    </Routes>
    </>
  )
}

export default App
