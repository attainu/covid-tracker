import React from "react";
import logo from "../images/muna.jpg";

const About = () => {
  return (
    <div className="bg-light mt-3">
      <h5>About Corona Tracker</h5>
      <p className="text-left p-5">
        <li>
          CORONATRACKER.com is a community-based project powered by over 460
          volunteers from across the globe, ranging from data scientists,
          medical professionals, UI/UX designers, fullstack developers, to the
          general public.
        </li>
        <br />
        <li>
          It acts as a portal for the public to keep track of the latest news
          development about the COVID-19, alongside collecting data for further
          analysis. All the contents are handpicked, filtered, and curated by
          volunteers to our best extent to ensure that sources are reliable with
          minimal hoaxes and fake news, in the best benefit of the public.
          Natural Language Processing (NLP) is used to analyze trending content
          and identify meaningful topics over various news sources and social
          media platforms prior to being verified by our team.
        </li>
        <br />
        <li>
          Works started on the 25th of January, the first day of the Lunar New
          Year. Our team has been working relentlessly to make this a success,
          and launched officially on the 27th of January.
        </li>
        <br />
        <li>
          We aim to use technology and make information more accessible, gather
          talented people all around the world to win the fight!
        </li>
      </p>
      <h3 className="">-:Project Partners:-</h3>
      <img src={logo} alt="logo" width="100px" height="100px" />
      <h4>Manmohan Sahoo</h4>
      <img src={logo} alt="logo" width="100px" height="100px" />
      <h4>Manmohan Sahoo</h4>
    </div>
  );
};

export default About;
