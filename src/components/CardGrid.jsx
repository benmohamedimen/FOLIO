import React from "react";

const CardGrid = ({ title, items, type }) => {
  return (
    <div className="bg-buccaneer-200 py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Titre */}
        {/* <h2 className="text-4xl font-bold text-center text-buccaneer-900 mb-12">
          {title}
        </h2> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className={`${type === "project"
                  ? "bg-buccaneer-300 p-8 shadow-md rounded-lg hover:shadow-lg transition-all duration-300 col-span-full"
                  : "bg-buccaneer-300 p-8 shadow-md rounded-lg hover:shadow-lg transition-all duration-300"
                }`}
            >
              {/* Titre de la carte */}
              <h3 className="text-2xl font-semibold text-buccaneer-900 mb-4">
                {item.title}
              </h3>
              {/* Iframe (pour projets) */}
              {type === "project" && item.demoLink && (
                <div className="mt-4">
                  <iframe
                    src={item.demoLink}
                    title={`Live preview of ${item.title}`}
                    className="w-full h-[100vh] rounded-md border"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  ></iframe>
                </div>
              )}

              {/* Image pour la page principale du projet (optionnelle) */}
              {type === "project" && item.image && (
                <img
                  src={item.image}
                  alt={`${item.title} main page`}
                  className="w-full rounded-md mb-4"
                />
              )}

              {/* Sous-titre */}
              <p className="text-buccaneer-700 text-lg mb-2">{item.subtitle}</p>

              {/* Date (pour diplômes) */}
              {type === "diploma" && (
                <p className="text-buccaneer-900 text-base mb-4">{item.date}</p>
              )}

              {/* Description sous forme de liste (pour les projets) */}
              {type === "project" && item.description && (
                <ul className="list-disc pl-6 mb-4">
                  {item.description.map((point, idx) => (
                    <li key={idx} className="text-buccaneer-800 text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              {/* Compétences techniques (pour les projets) */}
              {type === "project" &&
                item.technicalSkills &&
                item.technicalSkills.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-buccaneer-900 mb-2">
                      Technical Skills:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.technicalSkills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-buccaneer-700 text-white text-sm font-medium py-1 px-3 rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}


              {/* Lien Demo (optionnel pour projet) */}
              {type === "project" && item.demoLink && (
                <div className="mt-4">
                  <a
                    href={item.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-buccaneer-900 hover:underline"
                  >
                    Open Demo in new tab
                  </a>
                </div>
              )}

              {/* Sous-titre pour diplômes */}
              {type === "diploma" && item.subtitle && (
                <p className="text-buccaneer-700 text-lg">{item.subtitle}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
