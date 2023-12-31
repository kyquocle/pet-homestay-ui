import './App.css';
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import PetList from "./component/PetList";
import AddPet from "./component/AddPet";
import UpdatePet from "./component/UpdatePet";
import Detail from "./component/Detail";


function App() {
  return (
    <>
    <BrowserRouter>

    <Navbar/>
    <Routes>
      <Route path="/petList" element={<PetList/>}> </Route>
      <Route index element={<PetList></PetList>}></Route>
      <Route path="/addPet" element ={<AddPet/>}> </Route>
      <Route path="/updatePet/:petId" element ={<UpdatePet/>}> </Route>
      <Route path="/detailPet/:petId" element ={<Detail/>}> </Route>
    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
