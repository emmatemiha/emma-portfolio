import project1Image from "../assets/images/project1.png";
import project2Image from "../assets/images/project2.png";
import project3Image from "../assets/images/project3.png";
import project4Image from "../assets/images/project4.png";

export interface Project {
    id: number
    title: string
    description: string
    tags: string[]
    image: string
    githubUrl?: string
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Emma's Personal Portfolio",
        description: "What you're looking at now! Includes a personal summary, experience, projects and contact details sections.",
        image: project1Image,
        tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
        githubUrl: "https://github.com/emmatemiha/emma-portfolio"
    },
    {
        id: 2,
        title: "Adventures in Aotearoa",
        description: "Travel blog website which communicates with a RESTful API. Features include user authentication, blog CRUD, search/filter/sort/pagination, nested comments, reactions and user profile management",
        image: project2Image,
        tags: ["React", "TypeScript", "Vite", "MUI"]
    },
    {
        id: 3,
        title: "Alien Theme Park",
        description: "An animated OpenGL scene set on a small alien planet featuring a spaceship pendulum ride, moving alien characters, dynamic lighting, planar shadows and physics-based pendulum motion.",
        image: project3Image,
        tags: ["C++", "OpenGL 2"]
    },
    {
        id: 4,
        title: "Ray Tracer",
        description: "A ray-traced scene featuring reflections, refraction, shadows, multiple light sources, anti-aliasing, stochastic sampling and textured objects.",
        image: project4Image,
        tags: ["C++", "OpenGL 4"]
    }
]