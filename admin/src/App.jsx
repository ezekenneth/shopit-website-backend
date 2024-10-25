
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./pages/Login/login"
import Resetpassword from './pages/Reset_password/resetpassword'
import Forgotpassword from './pages/Forgot_password/forgotpassword'
import Dashboard from './pages/Dashboard/dashboard'

function App() {
 

  return (
    <Router>
           <Routes>
             <Route path='/' element={<Login />} />
             <Route path='/reset-password' element={<Resetpassword />} />
             <Route path='/forgot-password' element={<Forgotpassword />} />
             <Route path='/admin-dashboard' element={<Dashboard />} />
           </Routes>
    </Router>
  )
}

export default App
