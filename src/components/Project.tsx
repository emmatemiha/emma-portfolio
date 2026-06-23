import { projects } from "../data/project"
import { useState } from 'react'

export default function Projects() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    return (
        <div className="pt-24 px-8 min-h-screen max-w-8xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-burgundy text-center mb-12 underline">
                Projects
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="group flex flex-col rounded-xl border border-burgundy/10 bg-white shadow-sm">
                        {/*image*/}
                        <div className="aspect-video w-full overflow-hidden rounded-t-xl bg-burgundy/5">
                            <img src={project.image} alt={project.title}
                                className="h-full w-full object-cover"
                                onClick={() => setSelectedImage(project.image)}
                            />
                        </div>

                        {/*content*/}
                        <div className="flex flex-col flex-1 p-5">
                            <h3 className="text-lg font-bold text-dark mb-2">{project.title}</h3>
                            <p className="text-sm text-muted mb-4">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="bg-burgundy/10 text-burgundy text-xs px-2 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto flex justify-center">
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 border border-burgundy bg-burgundy/5 text-burgundy text-sm px-4 py-2 rounded-lg hover:bg-burgundy hover:text-cream transition-colors"
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