import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
