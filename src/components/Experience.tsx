import { experiences } from '../data/experience'
import Footer from './Footer'
import { motion } from "motion/react"

export default function Experience() {
    return (
        <div className="min-h-screen">
            <div className="pt-24 px-8 max-w-6xl mx-auto">
                <motion.h2
                    className="text-4xl font-script font-bold text-lastname text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Experience
                </motion.h2>

                <div className="relative">
                    {/*centre line*/}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-accent-border" />

                    <div className="block md:hidden absolute left-4 top-0 bottom-0 w-px bg-accent-border" />

                    {/*experience cards*/}
                    {experiences.map((exp, index) => {
                        const isLeft = index % 2 === 0

                        return (
                            <motion.div
                                key={exp.id}
                                className="relative flex items-center mb-4"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                            >
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
                            </motion.div>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}