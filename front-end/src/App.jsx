import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Frontpage from './views/Frontpage';
import Login from './views/Login';
import Register from './views/Register';

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Frontpage />} exact/>
          <Route path='/login' element={<Login />} exact/>
          <Route path='/register' element={<Register />} exact/>
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
