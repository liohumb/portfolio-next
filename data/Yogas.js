import about from '../public/images/yoga/about.png'
import article from '../public/images/yoga/article.png'
import connexion from '../public/images/yoga/connexion.png'
import events from '../public/images/yoga/events.png'
import home from '../public/images/yoga/home.png'

export const yogas = [
    {
        id: 1,
        name: 'about',
        img: about,
        description: 'Présentation de Yoga Everywhere & de Gaëlle, la maitre yogi. Partagé en deux parties, à la fois un résumé sur elle et son entreprise & un carousel infini viennent prendre place sur cette section de la home page.'
    },
    {
        id: 2,
        name: 'article',
        img: article,
        description: "Page d'article avec une sidebar dynamique avec des informations qui évoluent selon qui est connecté ou non. Pour l'administrateur du site l'article est complétement éditable en temps réel"
    },
    {
        id: 3,
        name: 'connexion',
        img: connexion,
        description: 'Page de connexion'
    },
    {
        id: 4,
        name: 'events',
        img: events,
        description: 'Page de connexion'
    },
    {
        id: 5,
        name: 'home',
        img: home,
        description: 'La home page avec fond en three js et gsap pour animer le logo dès le chargement'
    },
]