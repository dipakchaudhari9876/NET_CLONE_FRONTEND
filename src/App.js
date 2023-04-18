import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './Components/Header/Header';
import HomePages from './Home/HomePages';
import SinglePage from './Components/SinglePage/SinglePage';
import Auth from './Components/Auth/Auth';
import Sep from './Components/sep';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePages/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/single/:id' element={<SinglePage/>}/>
      {/* <Route path='/sep/:id' element={<Sep/>}/> */}
    </Routes>

    </BrowserRouter>
    
  );
}

export default App;
