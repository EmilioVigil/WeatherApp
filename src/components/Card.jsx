import React from 'react';
import '../style/Card.css'

export function Card({ min, max, name, img, onClose, id }) {
    return (
        <div className="card-container">

            <button onClick={onClose} >X</button>

            <div className="card-container-description" >
                <h5  >{name}</h5>
                <div>
                    <div>
                        <p>Min</p>
                        <p>{min}°</p>
                    </div>

                    <div>
                        <p>Max</p>
                        <p>{max}°</p>
                    </div>

                    <div>
                        <img className="iconoClima" src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} width="80" height="80" alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}