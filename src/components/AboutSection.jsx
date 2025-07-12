import { socialLinks } from "../constants";

const AboutSection = () => {
    return (
        <>
            <section id="about" className="py-48">
                <article className="max-w-4xl mx-2 px-4">
                    <h1 className="text-6xl font-bold mb-2">
                        BEDA <span className="text-blue-600">YAPO</span>
                    </h1>

                    <div className="text-gray-600 mb-4">
                        Anyama . Côte d'Ivoire . (225) 07-4855-4064 / (225) 01-0113-8329 .{" "}
                        <a href="mailto:yapoabed@gmail.com" className="text-blue-600 underline hover:underline hover:text-blue-800">yapoabed@gmail.com</a>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                        Développeur full-stack MERN, je concoins des applications web
                        modernes, de l’interface utilisateur à la base de données, avec une
                        approche orientée performance, expérience utilisateur et gestion de
                        projets agiles.
                    </p>
            
                    <div className="flex gap-4">
                        {socialLinks.map(({ href, icon: Icon, name }, index) => (
                            <a
                                key={index}
                                href={href}
                                aria-label={name}
                                className="text-white hover:bg-blue-600 transition-colors rounded-full bg-gray-600 p-2"
                            >
                                <Icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </article>
            </section>
        </>
    );
}

export default AboutSection;
