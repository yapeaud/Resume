import { educations } from "../constants";


const EducationSection = () => {
    return (
        <>
            <section id="education" className="py-24">
                <article className="max-w-4xl mx-2 px-4">
                    <h2 className="text-3xl font-bold mb-8 uppercase">Education</h2>

                    {educations.map((edu, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row justify-between ${index !== educations.length - 1 ? "mb-8" : ""}`}
                        >
                            <div className="md:w-3/4">
                                <h3 className="text-xl font-semibold mb-1 uppercase">{edu.institution}</h3>
                                <div className="text-gray-600 mb-1">{edu.degree}</div>
                                {edu.specialization && <div className="text-gray-700 mb-1">{edu.specialization}</div>}
                            </div>
                            <div className="md:w-1/4 text-blue-600 font-medium md:text-right mt-4 md:mt-0">
                                {edu.date}
                            </div>
                        </div>
                    ))}
                </article>
            </section>
        </>
    );
}

export default EducationSection;
