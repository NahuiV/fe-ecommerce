import NavBar from './components/NavBar/NavBar';
import Signin from './components/SignIn/Signin';
import './app.css'
import {UserContextProvider} from './context/UserContext'
import Home from './pages/Home';

function App() {
  return (
    <UserContextProvider>
      <Home/>
    </UserContextProvider>
  );
}

export default App;
