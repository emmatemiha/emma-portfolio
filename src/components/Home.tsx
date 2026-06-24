import avatarImage from "../assets/images/avatar.svg";
import htmlIcon from "../assets/icons/html-5.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import pythonIcon from "../assets/icons/python.svg";
import reactIcon from "../assets/icons/react.svg";
import tailwindIcon from "../assets/icons/tailwind.svg";
import typescriptIcon from "../assets/icons/typescript.svg";

export default function Home() {
    return (
        <div className="pt-24 px-8 min-h-screen max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-12 mb-16">
                
                <div className="flex flex-col">
                    <h1 className="text-6xl font-serif font-bold text-burgundy mt-5">
                        Emma Te Miha
                    </h1>
                    <p className="text-burgundy-light mb-10 text-lg">
                        CS Student · Frontend Developer · Designer 
                    </p>
                    <p className="text-dark max-w-lg text-lg">
                        Kia Ora! I'm a final-year Computer Science student at the University of Canterbury who enjoys
                        building fun web interfaces and exploring the creative side of software. My interests span a range
                        of design areas, from front-end development to motion graphics and 3D design.
                    </p>
                </div>

                <div className="flex-shrink-0">
                    <img src={avatarImage} alt="Emma"
                        className="w-64 h-64 rounded-full object-cover border-4 border-burgundy/30 shadow-[0_2px_6px_rgba(0,0,0,0.12)]"
                    />
                </div>
            </div>

            <hr className="border-t border-burgundy/30 mb-12" />

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