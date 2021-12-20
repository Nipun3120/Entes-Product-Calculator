import { Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from "./components";
import { Apfc, Landing, AddApfc, OneCtSteps, AddNew, Contactor, AddContactor } from "./admin";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/admin' element={<Landing/>} />
        <Route path="/apfc-relay" element={<Apfc/>}/>
        <Route path="/add-apfc-relay" element={<AddApfc/>}/>
        <Route path="/steps" element={<OneCtSteps/>}/>
        <Route path="/add-new-steps" element={<AddNew/>}/>
        <Route path="/cap-duty-contactor" element={<Contactor/>}/>
        <Route path="/add-cap-duty-contactor" element={<AddContactor/>}/>
      </Routes>
    </div>
  );
}
