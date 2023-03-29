import { Card } from 'react-bootstrap'

const Country = ({ item }) => {
  console.log(item.area)
  return (
    <Card>
      <Card.Img className="card-img" src={item.flags.png}/>
      <Card.Body>
        <Card.Title>{item.name.common}</Card.Title>
        <Card.Text>
          {item.population}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Country