
import {BrowserRouter , Routes , Route} from 'react-router-dom'
// import  Home from './pages/Home.js';
import  Login from './pages/Login.js';
import  Signup from './pages/Signup.js';
import  Dashboard from './pages/Dashboard.js';
import  Timesheet from './pages/Timesheet.js';
import  Test from './pages/Test.js';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

        
      

        <Route path="/" element={<Login/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Time-Sheet" element={<Timesheet/>} />
        <Route path="/Test" element={<Test/>} />
        
       

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
