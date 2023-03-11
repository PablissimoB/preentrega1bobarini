import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import NotFound from './Components/NotFound/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<ItemListContainer />} />
        <Route path="/category/:id" element = {<ItemListContainer />} />
        <Route path="/item/:id" element = {<ItemDetailContainer />} />
        <Route path="*" element = {<NotFound />} />

      </Routes>
      <Footer/>

      </BrowserRouter>
  );
}

export default App;
