import { useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import Country from './components/Country'
import Topnav from './components/Topnav'
import countryService from './services/getcountries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('')

  const getResult = (e) => {
    e.preventDefault()
    //Fetching data from REST Countries api, only rendering first 10.
    countryService.getCountries(country).then(res => {
      setCountries(res.slice(0,10))
    })
    setCountry('')
  }
  return (
    <div className="App">
      <Topnav/>
      <Form onSubmit={getResult} className='border border-dark bg-white col-11 col-sm-9 col-md-8 col-lg-4 mx-auto p-3 my-5'>
        <Form.Group>
          <Form.Label>Country name</Form.Label>
          <Form.Control value={country} onChange={({ target }) => setCountry(target.value)} type="text" placeholder='Write country'/>
        </Form.Group>
        <Button variant='dark' className='mt-3' type='submit'>Search</Button>
      </Form>
      <Row className='w-100 text-center justify-content-center mx-auto'>
        {countries.map(item =>
          <Country key={item.name.common} item={item}/>
        )}
      </Row>
    </div>
  )
}

export default App