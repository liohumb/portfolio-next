import Link from 'next/link'
import Image from 'next/image'
import Modal from '../../components/modal/Modal'

import logo from '../../assets/images/logo.png'
import {useState} from 'react'

export default function Nav() {
    const [active, setActive] = useState(false)

    const handleShow = () => {
        active ? setActive(false) : setActive(true)
    }

    return (
        <>
            <header className="nav">
                <button className="nav__button" onClick={() => handleShow()} title="bouton pour afficher le menu">
                    <Image src={logo}
                           alt="Logo deu portfolio de Lionel Humbert"
                           className="nav__button-image"/>
                </button>
            </header>
            <Modal active={`modal ${active && 'modal__active'}`} rotate={active && 'active'}/>
        </>
    )
}