import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Dashboard from './pages/Dashboard'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'

function App() {

  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/user/:id" element={ <Dashboard /> } />
      </Routes>
    </div>
  )
}

export default App
