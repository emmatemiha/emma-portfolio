import { projects } from "../data/project"
import { useState } from 'react'
import Footer from './Footer'
import { motion } from "motion/react"

export default function Projects() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    return (
        <div className="pt-24 min-h-screen overflow-x-hidden">
            <div className="px-8 max-w-6xl mx-auto">

                <motion.h2
                    className="text-4xl font-script font-bold text-lastname text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Projects
                </motion.h2>

                <div className="px-8 max-w-6xl mx-auto flex flex-col gap-16">
                    {projects.map((project, index) => {
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
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full rounded-xl cursor-pointer"
                                        onClick={() => setSelectedImage(project.image)}
                                    />
                                </div>

                                <div className={`flex-1 flex flex-col items-center text-center ${isLeft ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
                                    <h3 className="font-serif font-bold text-2xl text-firstname mb-3">{project.title}</h3>
                                    <p className="text-summary mb-4 max-w-md">{project.description}</p>
                                    <div className={`flex flex-wrap gap-2 mb-5 justify-center ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
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