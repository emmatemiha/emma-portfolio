import emmaImage from "../assets/images/me.png"
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { projects } from '../data/project'
import { motion } from "motion/react"
import { useState } from 'react'

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' as const, delay }
    })
}

const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: (delay: number) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: 'easeOut', delay }
    })
}

const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: 'easeOut', delay: 0.3 }
    }
}

export default function Home() {
    const featuredProjects = projects.slice(0, 2)
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    return (
        <div className="pt-24 min-h-screen overflow-x-hidden">
            <div className="px-8 max-w-5xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-12 mb-16 md:mb-8">
                    
                    <div className="flex flex-col">
                        <motion.h1
                            className="text-6xl font-serif font-semibold text-firstname mt-5 mb-2"
                            variants={fadeLeft}
                            initial="hidden"
                            animate="visible"
                            custom={0}
                        >
                            Emma
                        </motion.h1>
                        <motion.h1
                            className="text-7xl font-serif italic font-bold text-lastname mb-10"
                            variants={fadeLeft}
                            initial="hidden"
                            animate="visible"
                            custom={0.15}
                        >
                            Te Miha
                        </motion.h1>       
                        <motion.p
                            className="font-sans text-roles mb-10"
                            variants={fadeLeft}
                            initial="hidden"
                            animate="visible"
                            custom={0.3}
                        >
                            CS STUDENT · FRONTEND DEVELOPER · DESIGNER 
                        </motion.p>
                        <motion.p
                            className="font-sans text-summary max-w-lg mb-10"
                            variants={fadeLeft}
                            initial="hidden"
                            animate="visible"
                            custom={0.45}
                        >
                            Kia Ora! I'm a final-year Computer Science student at the University of Canterbury who enjoys
                            building fun web interfaces and exploring the creative side of software.
                        </motion.p>
                    </div>

                    {/*scrapbook card with pin and swing*/}
                    <motion.div
                        className="relative flex-shrink-0 w-64 md:w-80"
                        variants={fadeRight}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                            <div className="w-4 h-4 rounded-full bg-lastname shadow-sm" />
                            <div className="w-0.5 h-3 bg-lastname/60" />
                        </div>

                        <motion.div
                            className="-rotate-2"
                            style={{ transformOrigin: 'top center' }}
                            animate={{ rotate: [-2, 2, -2] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <div className="absolute w-64 md:w-80 h-full bg-tape top-2 left-2 rounded-sm" />
                            <div className="absolute w-64 md:w-80 h-full bg-accent-border top-1 left-1 rounded-sm" />
                            <div className="relative w-64 md:w-80 flex flex-col bg-white items-center rounded-sm px-6 pt-6 pb-6">
                                <img src={emmaImage} alt="Emma"
                                    className="w-48 h-48 rounded-full object-cover bg-accent border-4 border-accent-border mb-4"
                                    style={{ objectPosition: '20% -40%' }}
                                />
                                <p className="text-lastname font-script text-2xl">me ⤴</p>
                                <p className="text-roles font-sans text-xs text-center">enjoys: weighlifting, hiking, watching shows & cats!</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <div className="flex items-center gap-4 mb-10 px-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-border" />
                <span className="text-diamonds">✦</span>
                <span className="font-script text-3xl text-titles">tech stack</span>
                <span className="text-diamonds">✦</span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-accent-border" />
            </div>

            <div className="px-8 max-w-5xl mx-auto mb-8">
                <motion.div
                    className="flex flex-wrap justify-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.0 }}
                >
                    {[ 'Python', 'JavaScript', 'TypeScript', 'C++', 'HTML', 'Tailwind CSS', 'React'
                    ].map((tech, i) => (
                        <div key={tech} className="flex items-center gap-2 bg-white border border-accent-border rounded-full px-4 py-2">
                            <div className="w-2 h-2 rounded-full bg-titles" />
                            <span className="text-sm text-lastname">{tech}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="flex items-center gap-4 mb-8 pt-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-border" />
                <span className="text-diamonds">✦</span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-accent-border" />
            </div>

            <div className="px-8 max-w-5xl mx-auto mb-16">
                <motion.h2
                    className="text-3xl font-script text-lastname text-center mb-11"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Featured Projects
                </motion.h2>

                <div className="flex flex-col gap-16">
                    {featuredProjects.map((project, index) => {
                        const isLeft = index % 2 === 0
                        return (
                            <motion.div
                                key={project.id}
                                className={`flex flex-col md:flex-row items-center gap-8 ${!isLeft ? 'md:flex-row-reverse' : ''}`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                            >
                                <div className="flex-1">
                                    <motion.div
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ duration: 0.3, ease: 'easeOut' }}
                                        className="rounded-xl overflow-hidden cursor-pointer"
                                        onClick={() => setSelectedImage(project.image)}
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full rounded-xl"
                                        />
                                    </motion.div>
                                </div>

                                <div className={`flex-1 flex flex-col ${isLeft ? 'md:items-start md:text-left' : 'md:items-end md:text-right'} items-center text-center`}>
                                    <h3 className="font-serif font-bold text-2xl text-firstname mb-3">{project.title}</h3>
                                    <p className="text-summary mb-4 max-w-md">{project.description}</p>
                                    <div className={`flex flex-wrap gap-2 mb-5 ${isLeft ? 'justify-start' : 'justify-end'} justify-center`}>
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="bg-accent text-lastname text-xs px-3 py-1 rounded-full">{tag}</span>
                                        ))}
                                    </div>
                                    <motion.a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border border-lastname text-lastname text-sm px-5 py-2 rounded-md hover:border-firstname hover:text-firstname transition-colors w-fit"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        View on GitHub
                                    </motion.a>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                <div className="flex justify-center mt-16">
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                        <Link to="/projects" className="bg-lastname text-page text-sm px-6 py-3 rounded-full hover:bg-firstname transition-colors">
                            See more projects
                        </Link>
                    </motion.div>
                </div>
            </div>

            {selectedImage && (
                <div
                className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-8"
                onClick={() => setSelectedImage(null)}
                >
                <img src={selectedImage} alt="Enlarged" className="max-w-full max-h-full rounded-xl object-contain" />
                </div>
            )}

            <Footer />
        </div>
    )
}