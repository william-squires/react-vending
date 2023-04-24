import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './App.css';

import VendingMachine from './VendingMachine';
import Pepsi from "./Pepsi";
import Doritos from "./Doritos";
import Skittles from "./Skittles";
import Navbar from "./NavBar";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/Pepsi" element={<Pepsi />} />
          <Route path="/Doritos" element={<Doritos />} />
          <Route path="/Skittles" element={<Skittles />} />
          <Route path="/" element={<VendingMachine />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
