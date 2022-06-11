import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Login></Login>}></Route>
     </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;
