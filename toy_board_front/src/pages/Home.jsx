import { useEffect, useState } from 'react';
import './Home.css';
import SelectProject from './selectProject/SelectProject';
import axios from "axios";
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Fishing from './selectProject/fishing/Fishing';
import Board from './selectProject/board/Board';



const Home = () => {



    const [test, setTest] = useState();

    return (
        <Routes>
            <Route path='/fishing' element={<Fishing />} />
            <Route path='/board' element={<Board />} />
            <Route path='/*' element={<SelectProject />} />
        </Routes>
    );
}

export default Home;