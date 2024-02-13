import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import UserForm from './pages/UserForm'
import NotFound from './pages/NotFound'
import {UserContextProvider} from './context/UserProvider'

import Navbar from './components/Navbar'
import { MeasureContextProvider } from './context/MeasureProvider'

function App() {
  return (
    <div className='bg-zinc-900 h-screen'>
      <Navbar/>
      <div className='mx-auto px-4 py-4 h-screen'>
        <UserContextProvider>
          <MeasureContextProvider>
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/new" element={<UserForm/>}/>
              <Route path="/edit/:id" element={<UserForm/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </MeasureContextProvider>
        </UserContextProvider>

      </div>
    </div>
  )
}

export default App