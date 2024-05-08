import { Link } from 'react-router-dom'
import './card.css'

function Card({country}) {
    console.log(country)
 const {name, id, email, bandera, Activities} = country
//  console.log(continente)
  return (<>
      <Link to={`/home/${id}`} >
      <div className='cardContainer'>
          <h2>{name}</h2>
          <img src={bandera} alt="bandera" className='flag' />
          <p>{id}</p>
          <p>{email}</p>
          <h3>Ver detalles</h3>
      </div>
      </Link>
 </> )
}

export default Card
