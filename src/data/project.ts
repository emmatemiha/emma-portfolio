import project1Image from "../assets/images/project3.3.png";
import project2Image from "../assets/images/project2.3.png";
import project3Image from "../assets/images/project1.3.png";
import project4Image from "../assets/images/project4.3.png";
import project5Image from "../assets/images/project5.3.png";

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
        title: "Catalog",
        description: "A mobile app for cataloging neighborhood cats you spot on walks, with photo logging, personality profiles and daily quests that gamify exploring your area.",
        image: project3Image,
        tags: ["Kotlin", "Jetpack Compose"],
        githubUrl: "https://eng-git.canterbury.ac.nz/ete42/catalog-app"
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
        title: "Portfolio Website",
        description: "What you're looking at now! Includes a personal summary, experience, projects and contact details.",
        image: project1Image,
        tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
        githubUrl: "https://github.com/emmatemiha/emma-portfolio"
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