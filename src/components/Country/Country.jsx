import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        setVisited(!visited)
    }

    console.log(country)
    return (
        <div className='country'>
           <h3>Name: {name?.common}</h3>
           <img src={flags?.png} alt={name?.common}/> 
           <p>Population:{population}</p>
           <p>Area:{area}</p>
           <p><small>Code:{cca3}</small></p>
           <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
           {visited ?  'I visit this Country' : 'I will visit '}
           

        </div>
    );
};

export default Country;