
import Header from '../header/Header';
import Footer from './../footer/Footer';
import Banner from '../banner/Banner'; 
import Tours from './../tours/Tours';
import './Home.css'

function Home(prams){
   return(
    <div className='home'> 
        <Banner />
        <Tours data={prams.data}></Tours>
    </div>
   );
}

export default Home; 