import logo from './logo.svg';
import './App.css';
import LoginPage from './LoginPage';
import Category from './Category';
import Login from './Login';
import {Route, Routes} from 'react-router-dom';
import Signup from './Signup';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
      <LoginPage></LoginPage>
      <Login />
    </div>
  );
}

export default App;
