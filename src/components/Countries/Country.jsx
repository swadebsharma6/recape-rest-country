import React from 'react';
import './Country.css';

const Country = ({country}) => {
    console.log(country);
    const{name, area, capital, flags, region } = country;
    return (
        <div className='country'>
        <img src={flags.png} alt="" />
            <h3>Name: {name.common}</h3>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;