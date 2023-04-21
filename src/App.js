import './App.css';
import { BrowserRouter, Route , Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';
import Story from './components/Story';
import Apple from './components/Apple';
import Orange from './components/Orange';
import Peach from './components/Peach';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Main/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path="/story" element={<Story/>}/>
        <Route path="/story/apple" element={<Apple/>}/>
        <Route path="/story/orange" element={<Orange/>}/>
        <Route path="/story/peach" element={<Peach/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
