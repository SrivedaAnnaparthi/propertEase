import './App.css';
// import PrimarySearchAppBar from './Pages/HomePage';
import { Route ,Routes} from 'react-router-dom';
import Form from './Pages/Form';
import MiniDrawer from'./Pages/HomePage';
import LoginPage from './Pages/LoginPage';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" exact element={<LoginPage/>}/> 
      <Route path="/home" exact element={<MiniDrawer/>}/> 
      <Route path="/form" exact element={<Form/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
