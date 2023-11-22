import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path='/edituser/:id' element={<EditUser />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
