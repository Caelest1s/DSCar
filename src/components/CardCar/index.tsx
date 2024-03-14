import imgCar from '../../assets/car-card.png';
import './style.css';

export default function CardCar() {
    return (
        <div className='dscar-card'>
            <img src={imgCar} alt="Audi R8" />
            <div className='dscar-card-title mb-10'>
                Lorem ipsum dolor
            </div>
        </div>
    );
}