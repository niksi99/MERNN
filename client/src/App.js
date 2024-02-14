import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/welcome" element={<Welcome></Welcome>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
