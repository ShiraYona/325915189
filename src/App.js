import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Getdate from './Getdate';
import Myinputs from './Myinputs';
function App() {
  return (
    <div className="App">

 <BrowserRouter>
    <Routes>
      <Route path='/' element={<Myinputs/>}></Route>
      {<Route path='/getdata' element={<Getdate/>}></Route> }
    </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;






