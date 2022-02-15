import { useParams } from "react-router-dom";
import {useState} from 'react';
import './TourDetails.css'


function TourDetails(prams){
    const {id} = useParams();
    const [readMore,setReadMore]=useState(false);
    function shorten(str, maxLen, separator = ' ') {
        if (str.length <= maxLen) return str;
        return str.substr(0, str.lastIndexOf(separator, maxLen));
      }
    
  
    let tour = prams.data.filter(item=> item.id===id)
    let shortString = shorten(tour[0].info, 300)+ "...";
    let para = readMore ?  tour[0].info :  shortString ; 
    let readLink = readMore ? "Less See" : "See More" ; 
    return(
       <div className="tour-container">
            <img src={tour[0].image} alt={tour[0].name}/>
            <div className="content">
                <h3>{tour[0].name}</h3>
                <p>{para}</p>
                 <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}>{readLink}</a> 
           </div>     
       </div>  
    ) 
   
}

export default TourDetails;