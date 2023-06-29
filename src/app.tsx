

import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation';
import Countdown from './pages/Countdown';
import Timer from './pages/Timer';
import TodoApp from './pages/TodoApp';

function App() {
    return (
    <>
    <Navigation/>
    <Routes>
        <Route path="/" element={<Timer/>}/>
        <Route path="/countdown" element={<Countdown/>}/>
        <Route path="/todo" element={<TodoApp/>}/>
    </Routes>
        {/* <Timer/>
        <Countdown/> */}
    </>
    );
}

export default App;
