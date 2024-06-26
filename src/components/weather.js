import React from 'react'

const Weather = props => (
    <React.Fragment>
        <div>
        {
        props.latitude && props.longitude && <p className="weather__key">Location :
        <span className="weather__value">{props.latitude},{props.longitude}</span>
        </p>
    }
    {
        props.temperature && <p className="weather__key" >Temperature :  
					<span className="weather__value" > {props.temperature}</span>
					</p> 
    }
    {
        props.humidity && <p className="weather__key" >Humidity :  
					<span className="weather__value" > {props.humidity}</span>
					</p> 
    }
    {
        props.description && <p className="weather__key" >Description :  
					<span className="weather__value" > {props.description}</span>
					</p> 
    }
    {
        props.wind && <p className="weather__key" >Wind :  
					<span className="weather__value" > {props.wind}</span>
					</p> 
    }
    {
					props.error && <p className="weather__error" >{props.error}</p> 
    }
        </div>
    </React.Fragment>
)
export default Weather