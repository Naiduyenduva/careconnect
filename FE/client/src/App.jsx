import './App.css'
import Landing from './components/Landing.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SurgeryDetailPage from './components/SurgeryDetailPage.jsx'

function App() {

  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path="/surgery/:id" element={<SurgeryDetailPage />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
