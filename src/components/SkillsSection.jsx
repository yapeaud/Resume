import { programmingIcons, workflowItems } from "../constants";

const SkillsSection = () => {
  return (
    <>
      <section id="skills" className="py-24">
        <article className="max-w-4xl mx-2 px-4">
          <h2 className="text-3xl font-bold mb-8 uppercase">Skills</h2>

          <div className="mb-4 text-lg font-semibold text-gray-700">
            Langages et outils de programmation
          </div>
          <ul className="flex flex-wrap gap-4 text-3xl text-gray-600 mb-8">
            {programmingIcons.map((icon, index) => (
              <li
                key={index}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                <i className={`fab ${icon}`}></i>
              </li>
            ))}
          </ul>

          <div className="mb-4 text-lg font-semibold text-gray-700">Workflow</div>
          <ul className="space-y-2 text-gray-700">
            {workflowItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">
                  <i className="fas fa-check"></i>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </>
  );
};

export default SkillsSection;
