import React from "react";
import CardGrid from "./CardGrid";

const Diplomas = () => {
  const diplomas = [
    {
      title: "Computer Engineer: Software Engineering",
      subtitle: "Université libre de Tunis",
      date: "09/2017 – 07/2019",
    },
    {
      title: "Master's Degree in Computer Science: Pervasive Information Systems",
      subtitle: "University of Tunis, Faculty of Sciences",
      date: "09/2010 – 01/2015",
    },
    {
      title: "Bachelor's Degree in Computer Science for Business Management",
      subtitle: "Higher Institute of Management",
      date: "09/2007 – 06/2010",
    },
  ];

  return <CardGrid title="Diplomas and Education" items={diplomas} type="diploma"/>;
};

export default Diplomas;
