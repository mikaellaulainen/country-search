import { useState } from 'react'
import { Card } from 'react-bootstrap'

const Country = ({ item }) => {
  const [view,setView] = useState(false)
  console.log(item.area)
  return (
    <Card className='col-11 col-sm-9 col-md-5 col-lg-3 col-xl-2 p-3 m-3'>
      <Card.Title>{item.name.common}</Card.Title>
      <Card.Img className="card-img" src={item.flags.png}/>
      <Card.Body>
        <button onClick={() => setView(!view)}>More info</button>
        {view &&
        <div>
          <Card.Text>
            Population: {item.population}
          </Card.Text>
          <Card.Text>
            Capital: {item.capital}
          </Card.Text>
        </div>

        }

      </Card.Body>
    </Card>
  )
}

export default Country