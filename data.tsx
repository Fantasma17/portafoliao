import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, X ,Facebook, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Construction, Globe, MessageCircle  } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "https://www.youtube.com/@fantasma1754",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/feed/",
    },
    {
        id: 3,
        logo: <X size={30} strokeWidth={1} />,
        src: "https://x.com/17_fantasm93624",
    },
    {
        id: 4,
        logo: <Facebook size={30} strokeWidth={1} />,
        src: "https://www.facebook.com/sauly.cermeno.3/",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "https://www.twitch.tv/",
    },
    {
        id: 5,
        logo: <MessageCircle size={30} strokeWidth={1} />,
        src: "https://discord.com/channels/@me",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "inicio",
        icon: <HomeIcon size={25} color="#deeeeeff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "contacto",
        icon: <UserRound size={25} color="#deeeeeff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "curiosidad",
        icon: <CodeSquare size={25} color="#deeeeeff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Tareas",
        icon: <BookText size={25} color="#deeeeeff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "futuro repositorios",
        icon: <Construction size={25} color="#deeeeeff" strokeWidth={1} />,
        link: "/futuro proyecto",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Diseñar Grafico",
        subtitle: "Photoshop y Illustrator",
        description: "trabajo creacion de mantas vinilicas,sublimacion,animaciones ",
        date: "Nov 2019 ",
    },
    {
        id: 2,
        title: "Creador de videos",
        subtitle: "davinci resolve y filmora",
        description: "creacion de videos, edicion,",
        date: "Enero 2021",
    },
    {
        id: 3,
        title: "aprendiendo en Desarrollo Frontend",
        subtitle: "react y css",
        description: "Aprendiendo a  desarrollador frontend "
        
    },
    {
        id: 4,
        title: "Editora de audio",
        subtitle: "Audacity.",
        description: "edicion de audio",
        date: "jul 2017",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 5,
        text: "Años de experiencia en diseño grafico",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 23,
        text: "Proyectos ",
        lineRight: true,
        lineRightMobile: true,
    }
    
];



export const dataPortfolio = [
    {
        id: 1,
        title: "Tarea 1.2. Mapa conceptual e investigación",
        image: "/image-1.jpg",
        Urlpdf: "/Mapa.pdf",
        
    },
    {
        id: 2,
        title: "Tarea 1.1.Calculadora - Unit Test",
        image: "/image-2.jpg",
        Urlpdf: "/Tarea 1.1.  Calculadora Unit Test.mp4",
    },
    {
        id: 3,
        title: "Tarea 2: Análisis crítico del aseguramiento de la calidad de software..",
        image: "/image-3.jpg",
        Urlpdf: "/tarea aseguramiento.pdf",
    },
    {
        id: 4,
        title: "Tarea 3: Guia OWASP, Investigación Planes y Casos de prueba",
        image: "/image-4.jpg",
        Urlpdf: "GuiaPlanesCasosprueba.pdf",
    },
    {
        id: 5,
        title: "Tarea 4: Tipos de prueba",
        image: "/image-5.jpg",
       Urlpdf: "/TareaTiposprueba.pdf",
    },
    {
        id: 6,
        title: "Tarea 5: Tecnicas de pruebas ",
        image: "/image-6.jpg",
        Urlpdf: "0",
    },
    {
        id: 7,
        title: "Tarea Pendiente",
        image: "/image-7.jpg",
        Urlpdf: "0",
        
    },
    {
        id: 8,
        title: "Tarea Pendiente",
        image: "/image-8.jpg",
        Urlpdf: "0", 
    }
     
];


