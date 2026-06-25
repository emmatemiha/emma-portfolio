import { experiences } from '../data/experience'

export default function Experience() {
    return (
        <div className="min-h-screen">
            <div className="flex items-center gap-4 mb-16 px-8 mt-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-border" />
                <span className="text-diamonds">✦</span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-accent-border" />
            </div>

            <div className="px-8 max-w-5xl mx-auto">
                <h2 className="text-4xl font-script font-bold text-lastname text-center mb-12">
                    Experience
                </h2>

                <div className="relative">
                    {/*centre line*/}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-border 
                    to-transparent" />

                    {/*experience cards*/}
                    {experiences.map((exp, index) => {
                        const isLeft = index % 2 === 0

                        return (
                            <div key={exp.id} className="relative flex items-center mb-4">
                                <div className="w-1/2 pr-12">
                                    {isLeft && (
                                        <div className="bg-white rounded-xl p-6 shadow-sm border border-accent-border text-right">
                                            <p className="text-roles text-sm mb-1">{exp.date}</p>
                                            <h3 className="text-lg font-serif font-bold text-firstname mb-1">{exp.title}</h3>
                                            <p className="text-lastname text-sm font-medium mb-3">{exp.company}</p>
                                            <p className="text-summary text-sm">{exp.description}</p>
                                        </div>
                                    )}
                                </div>

                                {/*dots on line*/}
                                <div className="absolute left-1/2 -translate-x-1/2 w-4.5 h-4.5 bg-lastname rounded-full border-4 border-accent z-10" />

                                <div className="w-1/2 pl-12">
                                    {!isLeft && (
                                        <div className="bg-white rounded-xl p-6 shadow-sm border border-accent-border">
                                            <p className="text-roles text-sm mb-1">{exp.date}</p>
                                            <h3 className="text-lg font-serif font-bold text-firstname mb-1">{exp.title}</h3>
                                            <p className="text-lastname text-sm font-medium mb-3">{exp.company}</p>
                                            <p className="text-summary text-sm">{exp.description}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}