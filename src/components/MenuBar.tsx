import React from 'react'
import MenuLinks from './Menu';
import { Link } from 'react-router-dom';

const MenuBar = ({ variant }) => {

  const isHorizontal = variant === 'horizontal';

  const containerClasses = isHorizontal
    ? 'hidden sm:flex sm:items-center sm:justify-start sm:gap-6'
    : 'flex flex-col gap-6 mt-20 sm:gap-4 sm:mt-0';

  const listClasses = isHorizontal
    ? 'flex items-center gap-6 dark:text-white'
    : 'flex flex-col gap-6 dark:text-white';

  const linkClasses = `block px-4 py-2 rounded-lg font-semibold text-buccaneer-500 
    hover:text-buccaneer-800 
    focus:outline-none focus:text-buccaneer-800
    dark:text-gray-300 dark:hover:text-buccaneer-800 
    transition-colors duration-200`;



  return (
    <div className={containerClasses}>
      <ul className={listClasses}>
        {MenuLinks.map((data, index) => (
          <li key={index}>
            <Link
              to={data.link} 
              className={linkClasses}
            
            >
              {data.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuBar;
