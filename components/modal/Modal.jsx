import Link from 'next/link'

export default function Modal({active, rotate}) {
    return (
        <ul className={active}>
            <li className={`modal__menu modal__menu-home--${rotate}`}>
                <Link href="/#home"
                      className="modal__menu-link">
                    accueil
                </Link>
            </li>
            <li className={`modal__menu modal__menu-about--${rotate}`}>
                <Link href="/#about"
                      className="modal__menu-link">
                    à propos
                </Link>
            </li>
            <li className={`modal__menu modal__menu-work--${rotate}`}>
                <Link href="/#work"
                      className="modal__menu-link">
                    portfolio
                </Link>
            </li>
            <li className={`modal__menu modal__menu-contact--${rotate}`}>
                <Link href="/#contact"
                      className="modal__menu-link">
                    contact
                </Link>
            </li>
        </ul>
    )
}