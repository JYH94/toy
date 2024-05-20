import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Fishing from './pages/selectProject/fishing/Fishing';
import Board from './pages/selectProject/board/Board';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/*' element={<Home />} />
        <Route path='/fishing' element={<Fishing />} />
        <Route path='/board' element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
