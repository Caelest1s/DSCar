import CardCar from '../../components/CardCar';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './style.css';

export default function Catalog() {
    return (
        <>
            <Header />

            <main>
                <section id="dscar-container">
                    <div className="dscar-content">
                        <h1 className="dscar-title mb-25">Venha nos visitar</h1>
                        <div className="dscar-painel-card">
                            <CardCar />
                            <CardCar />
                        </div>
                    </div>
                </section>

                <section className="dsc-container-feedback">
                    <h1>O que estão dizendo</h1>
                    <div className="dscar-content-feedback">
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae harum voluptatem ad fugit id distinctio.</h4>
                    </div>
                    <div className="dscar-content-feedback">
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae harum voluptatem ad fugit id distinctio.</h4>
                    </div>
                    <div className="dscar-content-feedback">
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae harum voluptatem ad fugit id distinctio.</h4>
                    </div>
                    <div className="dscar-content-feedback">
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae harum voluptatem ad fugit id distinctio.</h4>
                    </div>
                    <div className="dscar-content-feedback">
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae harum voluptatem ad fugit id distinctio.</h4>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}