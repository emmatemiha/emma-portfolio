import emmaImage from "../assets/images/me.png";

export default function Home() {
    return (
        <div className="pt-24 min-h-screen">
            <div className="px-8 max-w-5xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-12 mb-16">
                    
                    <div className="flex flex-col">
                        <h1 className="text-6xl font-serif font-semibold text-firstname mt-5 mb-2">Emma</h1>
                        <h1 className="text-7xl font-serif italic font-bold text-lastname mb-10">Te Miha</h1>
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

                    <div className="relative flex-shrink-0 w-64 md:w-80 -rotate-2">
                        <div className="absolute w-64 md:w-80 h-full bg-tape top-2 left-2 rounded-sm" />
                        <div className="absolute w-64 md:w-80 h-full bg-accent-border top-1 left-1 rounded-sm" />
                        <div className="relative w-64 md:w-80 flex flex-col bg-white items-center rounded-sm px-6 pt-6 pb-6">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-tape opacity-70 rounded-sm" />
                            <img src={emmaImage} alt="Emma"
                                className="w-48 h-48 rounded-full object-cover bg-accent border-4 border-accent-border mb-4"
                                style={{ objectPosition: '20% -40%' }}
                            />
                            <p className="text-lastname font-script text-2xl">me ⤴</p>
                            <p className="text-roles font-sans text-xs text-center">enjoys: weighlifting, hiking, watching shows & cats!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4 mb-8 px-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-border" />
                <span className="text-diamonds">✦</span>
                <span className="font-script text-3xl text-titles">tech stack</span>
                <span className="text-diamonds">✦</span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-accent-border" />
            </div>

            <div className="px-8 max-w-5xl mx-auto mb-8">
                <div className="flex flex-wrap justify-center gap-6">
                    {[ 'Python', 'JavaScript', 'TypeScript', 'C++', 'HTML', 'Tailwind CSS', 'React'
                    ].map((tech) => (
                        <div key={tech} className="flex items-center gap-2 bg-white border border-accent-border rounded-full px-4 py-2">
                            <div className="w-2 h-2 rounded-full bg-titles" />
                            <span className="text-sm text-lastname">{tech}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}