import { experiences } from '../data/experience'
import Footer from './Footer'

export default function Experience() {
    return (
        <div className="min-h-screen">
            <div className="flex items-center gap-4 mb-11 pt-6">
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
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-accent-border" />

                    <div className="block md:hidden absolute left-4 top-0 bottom-0 w-px bg-accent-border" />

                    {/*experience cards*/}
                    {experiences.map((exp, index) => {
                        const isLeft = index % 2 === 0

                        return (
                            <div key={exp.id} className="relative flex items-center mb-4">
                                {/*small screen layout*/}
                                <div className="flex md:hidden w-full pl-12">
                                    <div className="absolute left-4 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-lastname rounded-full border-4 border-accent z-10" />
                                    <div className="bg-white rounded-xl p-6 shadow-sm border border-accent-border w-full">
                                        <p className="text-roles text-sm mb-1">{exp.date}</p>
                                        <h3 className="text-lg font-serif font-bold text-firstname mb-1">{exp.title}</h3>
                                        <p className="text-lastname text-sm font-medium mb-3">{exp.company}</p>
                                        <p className="text-summary text-sm">{exp.description}</p>
                                    </div>
                                </div>
                                
                                {/*big screen layout*/}
                                <div className="hidden md:flex w-full items-center">
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
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}