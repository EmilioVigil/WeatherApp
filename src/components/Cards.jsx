import { Card } from './Card.jsx';
import '../style/Cards.css'

export function Cards({ city, onClose }) {
    if (city) {
        return (
            <div className='cards-container'>
                {city.map(c => <Card
                    max={c.max}
                    min={c.min}
                    name={c.name}
                    img={c.img}
                    onClose={() => onClose(c.id)}
                    id={c.id}
                />)}
            </div>
        );
    } else {
        return (
            <div>Sin ciudades</div>
        )
    }
}