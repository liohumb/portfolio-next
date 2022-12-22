import Image from 'next/image'
import { brands } from '../../data/Brands'

export default function Background() {
    const brands1 = [...brands]
    const brands2 = [...brands]
    const brands3 = [...brands]
    const brands4 = [...brands]
    const brands5 = [...brands]
    const brands6 = [...brands]
    const brands7 = [...brands]
    const brands8 = [...brands]
    const brands9 = [...brands]
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
        }
        return array
    }

    shuffle(brands)
    shuffle(brands1)
    shuffle(brands2)
    shuffle(brands3)
    shuffle(brands4)
    shuffle(brands5)
    shuffle(brands6)
    shuffle(brands7)
    shuffle(brands8)
    shuffle(brands9)

    return (
        <div className="background">
            {brands.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands1.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands2.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands3.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands4.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands5.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands6.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands7.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands8.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands9.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands1.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands2.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands3.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands4.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands5.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands6.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands7.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands8.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands9.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands1.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands2.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands3.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands4.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands5.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands6.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands7.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands8.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands9.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands1.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands2.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands3.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands4.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands5.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands6.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands7.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands8.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands9.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands1.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands2.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands3.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands4.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands5.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands6.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands7.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands8.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands9.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands1.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands2.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands3.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands4.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands5.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands6.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands7.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands8.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands9.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands1.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands2.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands3.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands4.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands5.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands6.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands7.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands8.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands9.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands1.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands2.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands3.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands4.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands5.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands6.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands7.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands8.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands9.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands1.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands2.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands3.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands4.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands5.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands6.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands7.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands8.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands9.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands1.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands2.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands3.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands4.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands5.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands6.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands7.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands8.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands9.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands1.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands2.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands3.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands4.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands5.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands6.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands7.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands8.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands9.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands1.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands2.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands3.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands4.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands5.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands6.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands7.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands8.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands9.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands1.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands2.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands3.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands4.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands5.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands6.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands7.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands8.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands9.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands1.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands2.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands3.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands4.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands5.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands6.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands7.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands8.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands9.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands1.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands2.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands3.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands4.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands5.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands6.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands7.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands8.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands9.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands1.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands2.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands3.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands4.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands5.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands6.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands7.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands8.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands9.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands1.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands2.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands3.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands4.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands5.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands6.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands7.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands8.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
            {brands9.map( ( brand ) => <Image key={brand.id} src={brand.logo} alt=" " className="background__image"/>)}
        </div>
    )
}