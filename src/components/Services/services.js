import React from 'react';
import { serviceData } from '../../MOCK_DATA';


const Services = () => {


console.log(serviceData);




return (
  <div>
    {serviceData.map( d => {
      return (
        <div className="serviceContainer">
          <h2>{d.type}</h2>
            <div className="optionContainer">
              <ul className="namePriceWrapper">
                <li className="optionName"></li>
                <li className="optionPrice"></li>
              </ul>
              <p className="optionDescription"></p>
            </div>
        </div>
      )
    })}
    </div>
  )



}


export default Services;
