import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Calender from './Pages/Calender/Calender';
import Completed from './Pages/Completed/Completed';
import ToDo from './Pages/ToDo/ToDo';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        
        <Route path="/todo" element={<ToDo/>} /> 
        <Route path="/completed" element={<Completed/>} /> 
        <Route path="/calender" element={<Calender/>} /> 
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
