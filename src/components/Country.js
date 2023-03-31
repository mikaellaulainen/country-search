import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Country = ({ item }) => {
  const [view,setView] = useState(false)
  return (
    <Card className='col-11 col-sm-9 col-md-5 col-lg-3 col-xl-2 px-3 py-1 mx-3 mb-3'>
      <Card.Title>{item.name.common}</Card.Title>
      <Card.Img className="border card-img" src={item.flags.png}/>
      <Card.Body>
        <Button variant='dark' onClick={() => setView(!view)}>More info</Button>
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