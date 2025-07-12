import { experiences } from '../constants';

const ExperienceSection = () => {
    return (
        <>
            <section className='py-24'>
                <article className="max-w-4xl mx-2 px-4">
                    <h2 className="text-3xl font-bold mb-8 uppercase">Experience</h2>
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row justify-between ${index !== experiences.length - 1 ? "mb-8" : ""}`}
                        >
                            <div className="md:w-3/4">
                                <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                                <div className="text-gray-600 mb-3">{exp.company}</div>
                                <p className="text-gray-700">{exp.production}</p>
                            </div>
                            <div className="md:w-1/4 text-blue-600 font-medium md:text-right mt-4 md:mt-0">
                                {exp.date}
                            </div>
                        </div>
                    ))}
                </article>
            </section>
        </>
    );
}

export default ExperienceSection;
