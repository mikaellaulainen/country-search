import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
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
  }
  return (
    <div className="App">
      <Form onSubmit={getResult} className='col-4 mx-auto border p-3 my-5'>
        <Form.Group>
          <Form.Label>Country name</Form.Label>
          <Form.Control value={country} onChange={({ target }) => setCountry(target.value)} type="text" placeholder='Write country'/>
        </Form.Group>
        <Button className='mt-3' type='submit'>Search</Button>
      </Form>
      <div>
        {countries.map(item =>
          <Country key={item.area} item={item}/>
        )}
      </div>
    </div>
  )
}

export default App