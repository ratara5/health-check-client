import React from 'react'
import {Route, Routes} from 'react-router-dom'
import UserPage from './pages/UserPage'
import UserForm from './pages/UserForm'
import NotFound from './pages/NotFound'
import {UserContextProvider} from './context/UserProvider'

import Navbar from './components/Navbar'

function App() {
  return (
    <div className='bg-zinc-900 h-screen'>
      <Navbar/>
      <div className='container mx-auto px-4 py-4'>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<UserPage/>}/>
            <Route path="/new" element={<UserForm/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </UserContextProvider>
      </div>
    </div>
  )
}

export default App