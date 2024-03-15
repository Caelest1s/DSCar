import CardCar from '../../components/CardCar';
import CardFeedback from '../../components/CardFeedback';
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

                <section className="dscar-container-feedback">
                    <h1 className="dscar-feedback-title mb-25">O que estão dizendo</h1>
                    <CardFeedback />
                    <CardFeedback />
                    <CardFeedback />
                    <CardFeedback />
                    <CardFeedback />
                    <CardFeedback />
                </section>
            </main>
            <Footer />
        </>
    )
}