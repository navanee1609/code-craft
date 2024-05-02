import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomeScreen } from './screens/HomeScreen'
import { PlaygroundScreen } from './screens/PlaygroundScreens'
import { PlaygroundProvider } from './Providers/PlaygroundProvider'

function App() {
  return (
    <>
    <PlaygroundProvider>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/playground' element={<PlaygroundScreen/>}/>
      </Routes>
    </PlaygroundProvider>
    
    </>
  )
}

export default App