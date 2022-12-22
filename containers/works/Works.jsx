import Slider from '../../components/slider/slider'
import { yogas } from '../../data/Yogas'
import { pegases } from '../../data/Pegases'
import { soubeyran } from '../../data/Soubeyran'
import { wood } from '../../data/Wood'

export default function Works() {
    return (
        <section className="works">
            <div className="works__container">
                <div className="works__slider">
                    <Slider work={yogas} reverse={false}/>
                </div>
                <div className="works__slider">
                    <Slider work={pegases} reverse={true}/>
                </div>
                <div className="works__slider">
                    <Slider work={soubeyran} reverse={false}/>
                </div>
                <div className="works__slider">
                    <Slider work={wood} reverse={true}/>
                </div>
            </div>
        </section>
    )
}