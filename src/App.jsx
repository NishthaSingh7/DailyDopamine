import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import Login from './Login'
import Modes from './Modes';
import About from './About';
import Explore from './Explore';
import PTimer from './PTimer';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/all" element={<Explore />}/>
    <Route path="/themes" element={<Modes />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/timer" element={<PTimer />}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
