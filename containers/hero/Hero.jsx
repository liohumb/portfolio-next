import Background from '../../components/background/Background'

export default function Hero() {
    return (
        <section className="home">
            <Background/>
            <div className="home__container">
                <h1 className="home__title">hello 👋, <br/>I&apos;m Lio Humb</h1>
                <span className="home__subtitle">développeur web</span>
            </div>
        </section>
    )
}