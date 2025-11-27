import { projects } from "../constants";

const AccomplishmentsSection = () => {

    return (
        <>
            <section className="py-16 px-4 bg-gray-50" id="projects">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 uppercase">
                        Mes Projets
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
                            >
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-blue-600 hover:text-blue-800 font-medium"
                                    >
                                        Voir le projet →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AccomplishmentsSection;