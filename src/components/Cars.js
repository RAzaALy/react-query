import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Cars = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState('')
  
    useEffect(() => {
      axios
        .get('http://localhost:4000/cars')
        .then(res => {
          setData(res.data)
          setIsLoading(false)
        })
        .catch(error => {
          setError(error.message)
          setIsLoading(false)
        })
    }, [])
  
    if (isLoading) {
      return <h2>Loading...</h2>
    }
  
    if (error) {
      return <h2>{error}</h2>
    }
  
    return (
      <>
        <h2>Super Cars Page</h2>
        {data.map(car => {
          return <div key={car.id}>{car.model}</div>
        })}
      </>
    )
  }
  export default Cars;