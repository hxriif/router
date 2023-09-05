
import './App.css';
import Home from './components/Home'
import Register from './components/Register';
import Login from './components/Login';
import { Route, Routes } from 'react-router';



function App() {
  return (
    <div className="App">
      <h1></h1>

      <Routes>
        <Route path='/' element={<Register/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
      </Routes>
      
     
    </div>
  );
}

export default App;
