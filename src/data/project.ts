import project1Image from "../assets/images/project1.2.png";
import project2Image from "../assets/images/project2.2.png";
import project3Image from "../assets/images/project5.2.png";
import project4Image from "../assets/images/project3.2.png";
import project5Image from "../assets/images/project4.2.png";

export interface Project {
    id: number
    title: string
    description: string
    tags: string[]
    image: string
    githubUrl?: string
    figmaUrl?: string
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Emma's Personal Portfolio",
        description: "What you're looking at now! Includes a personal summary, experience, projects and contact details sections.",
        image: project1Image,
        tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
        githubUrl: "https://github.com/emmatemiha/emma-portfolio"
    },
    {
        id: 2,
        title: "Adventures in Aotearoa",
        description: "Travel blog website which communicates with a RESTful API. Features include user authentication, blog CRUD, search/filter/sort/pagination, nested comments, reactions and user profile management.",
        image: project2Image,
        tags: ["React", "TypeScript", "Vite", "MUI"],
        githubUrl: "https://github.com/emmatemiha/travel-blog"
    },
    {
        id: 3,
        title: "Catalog",
        description: "A mobile app for cataloging neighborhood cats you spot on walks, with photo logging, a map of sightings, personality profiles and daily quests that gamify exploring your area. Designed in Figma and built with React Native (Expo).",
        image: project3Image,
        tags: ["React Native", "Expo", "Figma", "react-native-maps"],
        githubUrl: "https://github.com/emmatemiha/catalog-app",
        figmaUrl: "https://www.figma.com/proto/Wf6tzm4nEdoyhNvm6xq2ik/Untitled?node-id=0-1&t=XMcuoNKUcoljkCLX-1"
    },
    {
        id: 4,
        title: "Alien Theme Park",
        description: "An animated OpenGL scene set on a small alien planet featuring a spaceship pendulum ride, moving alien characters, dynamic lighting, planar shadows and physics-based pendulum motion.",
        image: project4Image,
        tags: ["C++", "OpenGL 2"],
        githubUrl: "https://github.com/emmatemiha/alien-theme-park"
    },
    {
        id: 5,
        title: "Ray Tracer",
        description: "A ray-traced scene featuring reflections, refraction, shadows, multiple light sources, anti-aliasing, stochastic sampling and textured objects.",
        image: project5Image,
        tags: ["C++", "OpenGL 4"],
        githubUrl: "https://github.com/emmatemiha/ray-tracer.git"
    }
]