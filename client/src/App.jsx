import './App.css'
import Header from './components/header/Header'
import Background from './components/background/Background'
import SignIn from './components/registration/SignIn'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import SignUp from './components/registration/SignUp'
import Home from './pages/Home/Home'


function App() {

  return (
    <>
    
    <Background/>
    <Router>
    <Header/>
    <div className="content">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
