import avatarImage from "../assets/images/avatar.svg";
import htmlIcon from "../assets/icons/html-5.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import pythonIcon from "../assets/icons/python.svg";
import reactIcon from "../assets/icons/react.svg";
import tailwindIcon from "../assets/icons/tailwind.svg";
import typescriptIcon from "../assets/icons/typescript.svg";
import { projects } from "../data/project";

export default function Home() {
    return (
        <div className="pt-24 px-8 min-h-screen max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-12 mb-16">
                
                <div className="flex flex-col">
                    <h1 className="text-6xl font-serif font-semibold text-firstname mt-5 mb-2">Emma</h1>
                    <h1 className="text-7xl font-script font-bold text-lastname mb-10">Te Miha</h1>
                    <p className="font-sans text-roles mb-10">
                        CS STUDENT · FRONTEND DEVELOPER · DESIGNER 
                    </p>
                    <p className="font-sans text-summary max-w-lg mb-10">
                        Kia Ora! I'm a final-year Computer Science student at the University of Canterbury who enjoys
                        building fun web interfaces and exploring the creative side of software.
                    </p>

                    <div className="mt-auto flex justify-center">
                        <a
                            href="#projects"
                            onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                            className="bg-lastname text-page text-sm px-4 py-2 rounded-full hover:bg-firstname hover:text-page transition-colors"
                        >
                            View my work
                        </a>
                    </div>
                </div>

                <div className="flex-shrink-0">
                    <img src={avatarImage} alt="Emma"
                        className="w-64 h-64 rounded-full object-cover border-4 border-burgundy/30 shadow-[0_2px_6px_rgba(0,0,0,0.12)]"
                    />
                </div>
            </div>

            <hr className="border-t border-burgundy/30 mb-12 fading-divider" />

            <h1 className="text-3xl text-center font-serif text-burgundy mb-9">Tech Stack</h1>

            <div className="flex justify-center items-center gap-6">
                {[
                    { src: pythonIcon, name: 'Python' },
                    { src: javascriptIcon, name: 'JavaScript' },
                    { src: typescriptIcon, name: 'TypeScript' },
                    { src: htmlIcon, name: 'HTML' },
                    { src: tailwindIcon, name: 'Tailwind CSS' },
                    { src: reactIcon, name: 'React' },
                ].map((tech) => (
                    <div key={tech.name} className="relative group flex flex-col items-center">
                        <img src={tech.src} alt={tech.name} className="w-15 h-15" />
                        <span className="mt-2 text-xs text-burgundy opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}