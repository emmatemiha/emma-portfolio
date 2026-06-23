import { experiences } from '../data/experience'

export default function Experience() {
    return (
        <div className="pt-24 px-8 min-h-screen max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-burgundy text-center mb-16 underline">
                Experience
            </h2>

            <div className="relative">
                {/*centre line*/}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-burgundy/30" />

                {/*experience cards*/}
                {experiences.map((exp, index) => {
                    const isLeft = index % 2 === 0

                    return (
                        <div key={exp.id} className="relative flex items-center mb-4">
                            <div className="w-1/2 pr-12">
                                {isLeft && (
                                    <div className="bg-white rounded-xl p-6 shadow-sm border border-burgundy/10 text-right">
                                        <p className="text-burgundy-light text-sm mb-1">{exp.date}</p>
                                        <h3 className="text-lg font-bold text-dark mb-1">{exp.title}</h3>
                                        <p className="text-burgundy text-sm font-medium mb-3">{exp.company}</p>
                                        <p className="text-muted text-sm">{exp.description}</p>
                                    </div>
                                )}
                            </div>

                            {/*dots on line*/}
                            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-burgundy rounded-full border-4 border-cream z-10" />

                            <div className="w-1/2 pl-12">
                                {!isLeft && (
                                    <div className="bg-white rounded-xl p-6 shadow-sm border border-burgundy/10">
                                        <p className="text-burgundy-light text-sm mb-1">{exp.date}</p>
                                        <h3 className="text-lg font-bold text-dark mb-1">{exp.title}</h3>
                                        <p className="text-burgundy text-sm font-medium mb-3">{exp.company}</p>
                                        <p className="text-muted text-sm">{exp.description}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}