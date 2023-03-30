import { useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import Country from './components/Country'
import countryService from './services/getcountries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('')

  const getResult = (e) => {
    e.preventDefault()
    console.log('searching')
    countryService.getCountries(country).then(res => {
      setCountries(res)
    })
    setCountry('')
  }
  return (
    <div className="App">
      <Form onSubmit={getResult} className='col-11 col-sm-9 col-md-6 col-lg-4 mx-auto border p-3 my-5'>
        <Form.Group>
          <Form.Label>Country name</Form.Label>
          <Form.Control value={country} onChange={({ target }) => setCountry(target.value)} type="text" placeholder='Write country'/>
        </Form.Group>
        <Button className='mt-3' type='submit'>Search</Button>
      </Form>
      <Row className='w-100 text-center justify-content-center mx-auto'>
        {countries.map(item =>
          <Country key={item.area} item={item}/>
        )}
      </Row>
    </div>
  )
}

export default App