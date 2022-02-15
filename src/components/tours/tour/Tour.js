import { Link } from 'react-router-dom';

function Tour(props){
    return(
        <div className='gallery'>
         { props.tour.map((item) => {
              return(
                
                  <div className="card" key={item.id}>
                    <Link to={`city/${item.id}`}>
                      <img src={item.image} alt={item.name}/>
                      <h5>{item.name}</h5>
                      <p className="card-text">{item.info}</p>
                      <p className="card-salary">{item.price}</p>
                    </Link>
                  </div>
                
                
              )
          })}
       </div> 
    );
}

export default Tour ; 