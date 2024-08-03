import './App.css';
import RA  from './components/Respappbar';
import H from './components/Home';
import R from './components/Register';
import L from './components/Login';
import S from './components/Show';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import U from './components/Update';
import D from './components/Delete';

function App() {

  return (
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src="mits logo.jpg"className="App-logo" alt="logo" />
        <p>
          MADANAPALLE INSTITUTE OF TECHNOLOGY AND SCIENCE
        </p>

      </header>
      <div className='App-body'>
      <RA />
      <Routes>
        <Route path="/hom" element={<H/>}></Route>
        <Route path="/reg" element={<R/>}></Route>
        <Route path="/log" element={<L/>}></Route>
        <Route path="/sho" element={<S/>}></Route>
        <Route path="/upd" element={<U/>}></Route>
        <Route path="/del" element={<D/>}></Route>
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
  
}
export default App;
