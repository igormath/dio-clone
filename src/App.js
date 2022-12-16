import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Homepage from "./pages/home/Homepage";
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Feed from './pages/feed/Feed';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/entrar' element={<Login />} />
          <Route path='/cadastrar' element={<Signup />} />
          <Route path='/feed' element={<Feed />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
