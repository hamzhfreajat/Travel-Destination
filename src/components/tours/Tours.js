import './Tours.css'

// "name": "Ireland",
//     "info": "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
//     "image": "https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg",
//     "price": "3,895"
function Tours(props){

    return(
        <div className='gallery'>
         { props.data.map(item => {
              return(
                <div className="card">
                <img src={item.image} alt={item.name}/>
                <h5>{item.name}</h5>
                <p className="card-text">{item.info}</p>
                <p className="card-salary">{item.price}</p>
                </div>
              )
          })}
       </div> 
    ); 
}

export default Tours; 