import React from "react";

const CardGrid = ({ title, items, type }) => {
  return (
    <div className="bg-buccaneer-200 py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* <h2 className="text-4xl font-bold text-center text-buccaneer-900 mb-12">
          {title}
        </h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-buccaneer-300 p-8 shadow-md rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-buccaneer-900 mb-4">
                {item.title}
              </h3>
              <p className="text-buccaneer-700 text-lg mb-2">{item.subtitle}</p>
              {type === "diploma" ? <p className="text-buccaneer-900 text-base mb-4">{item.date}</p>  : null}

              {/* Conditionally render description for projects */}
              {type === "project" && item.description ? (
                <ul className="list-disc pl-6 mb-4">
                  {item.description.map((point, idx) => (
                    <li key={idx} className="text-buccaneer-800 text-sm">{point}</li>
                  ))}
                </ul>
              ) : null}

              {/* Conditionally render Technical Skills for projects */}
              {type === "project" && item.technicalSkills && item.technicalSkills.length > 0 ? (
                <div>
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
              ) : null}

              {/* Demo Link for projects */}
              {type === "project" && item.demoLink ? (
                <div className="mt-4">
                  <a
                    href={item.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-buccaneer-900 hover:underline"
                  >
                    Demo Link
                  </a>
                </div>
              ) : null}

              {/* For diplomas, display institution name */}
              {type === "diploma" && item.subtitle ? (
                <p className="text-buccaneer-700 text-lg">{item.subtitle}</p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
