import imgCar from '../../assets/car-card.png';
import Header from '../../components/Header';
import './style.css';

export default function Catalog() {
    return (
        <>
            <Header />

            <main>
                <section id="dscar-container-card">
                    <div className="dscar-content">
                        <h1>Venha nos visitar</h1>
                        <div className="dscar-painel-card">
                            <div className='dscar-card'>
                                <div className='dscar-card-img'>
                                    <img src={imgCar} alt="Audi R8" />
                                </div>
                                <div className='dscar-card-description'>Lorem ipsum dolor</div>
                            </div>
                            <div className='dscar-card'>
                                <div className='dscar-card-img'>
                                    <img src={imgCar} alt="Audi R8" />
                                </div>
                                <div className='dscar-card-description'>Lorem ipsum dolor</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="dsc-container-feedback">
                    <div>
                        O que estão dizendo
                    </div>
                </section>
                <div></div>
                oiii
            </main>
            
            <footer>
                Footer
            </footer>
        </>
    )
}