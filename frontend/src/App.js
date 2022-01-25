import './App.css';
import MiniDrawer from './Pages/HomePage';
import { Route ,Routes} from 'react-router-dom';
import Form from './Pages/Form';
import LoginPage from './Pages/LoginPage';
// import LogoutIcon from '@mui/icons-material/Logout';
import TransactionDetails from './Pages/TransactionDetails';
import GuestDetails from './Pages/GuestDetails';

  function App() {
    return (
      <div className="App">
       
        <Routes>
        <Route  exact path="/"  element={<LoginPage/>}/>
        <Route  exact path="/home"  element={<MiniDrawer/>}/>
       <Route exact path="/form" element={<Form/>}/>
       <Route exact path="/back" element={<LoginPage/>}/>
       <Route exact path="/transaction" element={<TransactionDetails/>}/>
       <Route exact path="/userdetails" element={<GuestDetails/>}/>
        
        </Routes>
       
      </div>
    );
  }
export default App;
