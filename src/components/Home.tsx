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
                    <img src="/icons/avatar.svg" alt="Emma"
                        className="w-64 h-64 rounded-full object-cover border-4 border-burgundy/30 shadow-[0_2px_6px_rgba(0,0,0,0.12)]"
                    />
                </div>
            </div>

            <hr className="border-t border-burgundy/30 mb-12" />

            <h1 className="text-3xl text-center font-serif text-burgundy mb-9">Tech Stack</h1>

            <div className="flex justify-center items-center gap-6">
                <img src="/icons/python.svg" alt="Python" className="w-15 h-15" />
                <img src="/icons/javascript.svg" alt="JavaScript" className="w-15 h-15" />
                <img src="/icons/typescript.svg" alt="TypeScript" className="w-15 h-15" />
                <img src="/icons/html-5.svg" alt="HTML" className="w-15 h-15" />
                <img src="/icons/tailwind.svg" alt="Tailwind CSS" className="w-15 h-15" />
                <img src="/icons/react.svg" alt="React" className="w-15 h-15" />
            </div>
        </div>
    )
}