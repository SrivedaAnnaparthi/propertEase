import './App.css';
import PrimarySearchAppBar from './Pages/HomePage';
import { Route ,Routes} from 'react-router-dom';
import Form from './Pages/Form';
function App() {
  return (
    <div className="App">
     
   
      <PrimarySearchAppBar/>
      <Routes>
      <Route path="/form" exact element={<Form/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
