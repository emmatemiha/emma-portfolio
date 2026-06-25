import { projects } from "../data/project"
import { useState } from 'react'

export default function Projects() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    return (
        <div className="pt-6 px-8 min-h-screen max-w-8xl mx-auto">

            <div className="flex items-center gap-4 mb-8 px-8 mt-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-border" />
                <span className="text-diamonds">✦</span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-accent-border" />
            </div>

            <h2 className="text-4xl font-script font-bold text-lastname text-center mb-12">
                Projects
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="group flex flex-col rounded-xl border border-accent-border bg-white shadow-sm">
                        {/*image*/}
                        <div className="aspect-video w-full overflow-hidden rounded-t-xl shadow-sm">
                            <img src={project.image} alt={project.title}
                                className="h-full w-full object-cover cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-107"
                                onClick={() => setSelectedImage(project.image)}
                            />
                        </div>

                        {/*content*/}
                        <div className="flex flex-col flex-1 p-5">
                            <h3 className="text-lg font-serif font-bold text-firstname mb-2">{project.title}</h3>
                            <p className="text-sm text-summary mb-4">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="bg-accent text-lastname text-xs px-2 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="gap-2 text-lastname text-sm px-2 py-1 rounded-full bg-lastname/5 hover:bg-lastname/10 hover:text-lastname transition-colors"
                                >
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/*to keep track of which image is open*/}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-8"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        alt="Enlarged Image"
                        className="max-w-full max-h-full rounded-xl object-contain"
                    />
                </div>
            )}

        </div>
    )
}