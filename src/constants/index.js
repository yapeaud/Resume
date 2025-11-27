import { profil, imgProject1, imgProject2, imgProject3, imgProject4, imgProject5 } from "../assets";

export const profilImage = profil;
export const imgProjectFlewa = imgProject1;
export const imgProjectMeteo = imgProject2;
export const imgProjectEspace = imgProject3;
export const imgProjectFair = imgProject4;
export const imgPojectTodoEvents = imgProject5

import {
    Linkedin,
    Github,
    Facebook,
} from "lucide-react";;

export const socialLinks = [
    { href: "https://www.linkedin.com/in/beda-yapeaud-062979262/", icon: Linkedin, name: "LinkedIn" },
    { href: "https://github.com/yapeaud", icon: Github, name: "GitHub" },
    { href: "https://web.facebook.com/abed.yapo/", icon: Facebook, name: "Facebook" },
];

export const experiences = [
    {
        title: 'DÉVELOPPEUR WEB FULL STACK',
        company: 'GOMYCODE',
        production: "Création d'une application de messagerie instantanée.",
        date: "2024-2025"
    },
    {
        title: 'DÉVELOPPEUR WEB',
        company: 'ATOS DIGITAL ACADEMY',
        production: "Élaboration d'une application en ligne dédiée à la gestion des alertes d'urgence",
        date: "2022-2023"
    },
    {
        title: 'RÉFÉRENT DIGITAL',
        company: 'IVOIRE GEEK SCHOOL',
        production: "Mise en place du site en ligne de l'APFNP.",
        date: "2020-2021"
    }
];

export const educations = [
    {
        institution: "Université Virtuelle de Côte d'Ivoire (UVCI)",
        degree: "LICENCE",
        specialization: "DÉVELOPPEMENT D'APPLICATIONS ET E-SERVICES",
        date: "2020 - 2023",
    },
    {
        institution: "INSTITUT SECONDAIRE TECHNIQUE ADAMA SANOGO",
        degree: "BACCALAURÉAT",
        specialization: 'SÉRIE F2',
        date: "2008",
    }
];

export const programmingIcons = [
    "fa-html5",
    "fa-css",
    "fa-js",
    "fa-react",
    "fa-node-js",
    "fa-git",
    "fa-github",
    "fa-npm"
];

export const workflowItems = [
    "Mobile-First, Responsive Design",
    "Cross Browser Testing & Debugging",
    "Cross Functional Teams",
    "Agile Development & Scrum",

];

export const awards = [
    "Certificate of Completion - Software Developer Bootcamp - GoMyCode (2025)",
    "Certificate of Completion - Software Developer Bootcamp - Atos Digital Academy (2023)",
    "Certificate of Completion - Software Developer Bootcamp - Developers.Institute (2023)",
    "Certificate of Completion - Référent Digital - Ivoir Geek School (2021)",

];

export const projects = [
        {
            id: 1,
            title: "Application de gestion d'évenements",
            description: "Une application full-stack permettant de créer, éditer et supprimer des evenements.",
            techStack: ["React", "Node.js", "Express.js",  "MongoDB"],
            link: "https://mini-event-finder-hazel.vercel.app/",
            imageUrl: imgPojectTodoEvents
        },
        {
            id: 2,
            title: "API de météo personnalisée",
            description: "Une API REST qui récupère les données météo et les formatte pour une interface utilisateur élégante.",
            techStack: ["Express.js", "OpenWeather API", "Axios"],
            link: "https://meteo-bds.vercel.app/",
            imageUrl: imgProjectMeteo
        },
        {
            id: 3,
            title: "Application de messagerie instantane",
            description: "Une application full-stack permettant de communiquer en temps réel avec des utilisateurs.",
            techStack: ["React", "Node.js", "MongoDB"],
            link: "https://flewa.onrender.com/login",
            imageUrl: imgProjectFlewa
        },
        {
            id: 4,
            title: "Site vitrine pour une officine",
            description: "Une application pour une officine de vente de produits de lunette.",
            techStack: ["React", "Tailwind CSS"],
            link: "https://espace-vision.vercel.app/",
            imageUrl: imgProjectEspace
        },
        {
            id: 5,
            title: "Application Business Fair",
            description: " plateforme technologique dédiée au développement économique durable en Afrique",
            techStack: ["React", "Tailwind CSS"],
            link: "https://fair-growth-africa.vercel.app/",
            imageUrl: imgProjectFair
        }
    ];