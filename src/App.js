import {Home} from './frontend/pages/Home'
import {Header, Footer} from './frontend/components/Headers'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import './App.css';

function App() {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path = '/Home' element={<Home/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  );
}

export default App;
