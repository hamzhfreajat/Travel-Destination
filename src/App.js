import Home from './components/home/Home';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import TourDetails from './components/TourDetails/TourDetails';
import data from './data/db.json'; 
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


function App() {

  return (
    <div className="App">
      <Header />
     <Routes>
         <Route path='/' element={<Home data ={data}/>} />
         <Route path='/city/:id' element={<TourDetails data ={data} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
