import { profil } from "../assets";

export const profilImage = profil;

import {
    Linkedin,
    Github,
    Facebook,
} from "lucide-react";

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