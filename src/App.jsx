import React from 'react'
import {Route, Routes} from 'react-router-dom'
import UserPage from './pages/UserPage'
import UserForm from './pages/UserForm'
import NotFound from './pages/NotFound'
import {UserContextProvider} from './context/UserProvider'

import Navbar from './components/Navbar'

function App() {
  return (
    <UserContextProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<UserPage/>}/>
        <Route path="/new" element={<UserForm/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </UserContextProvider>
  )
}

export default App