
import Header from '../header/Header';
import Footer from './../footer/Footer';
import Tours from './../tours/Tours';
import data from './../../data/db.json'; 
import './Home.css'

function Home(){
   return(
    <div className='home'>
        <Header />
        <Tours data={data}></Tours>
        <Footer />
    </div>
   );
}

export default Home; 