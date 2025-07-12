import { awards } from '../constants';

const AwardsSection = () => {
    return (
        <>
            <section className='py-48'>
                <article className='max-w-4xl mx-2 px-4'>
                    <h2 className="text-3xl font-bold mb-8 uppercase">Certifications</h2>
                    <ul className="space-y-3">
                        {awards.map((award, index) => (
                            <li key={index} className="flex items-start text-gray-700">
                                <span className="text-yellow-500 mr-3 mt-1 text-lg">
                                    <i className="fas fa-trophy"></i>
                                </span>
                                <span dangerouslySetInnerHTML={{ __html: award }} />
                            </li>
                        ))}
                    </ul>
                </article>
            </section>
        </>
    );
}

export default AwardsSection;
