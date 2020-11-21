import React from "react";
import Linked from "./Link";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>NAIRALAND NIGERIAN FORUMS</h2>
      <div className="naira">
        <Linked path="">Nairaland / General</Linked>: <Linked path="politics">Politics</Linked>,
        <Linked path="crime">Crime</Linked>,
        <Linked path="romance">Romance</Linked>,
        <Linked path="jobs">Jobs/Vacancies</Linked>,
        <Linked path="career">Career</Linked>,
        <Linked path="business">Business</Linked>,
        <Linked path="invest">Investment</Linked>,
        <Linked path="nysc">NYSC</Linked>,
        <Linked path="education">Education</Linked>,
        <Linked path="auto">Autos</Linked>,<Linked path="car">Car Talk</Linked>,
        <Linked path="properties">Properties</Linked>,
        <Linked path="health">Health</Linked>,
        <Linked path="travel">Travel</Linked>,
        <Linked path="family">Family</Linked>,
        <Linked path="culture">Culture</Linked>,
        <Linked path="religion">Religion</Linked>,
        <Linked path="food">Food</Linked>,
        <Linked path="diaries">Diaries</Linked>,
        <Linked path="ads">Nairaland Ads</Linked>
        <Linked path="pets">Pets</Linked>,
        <Linked path="agriculture">Agriculture</Linked>,
      </div>
      <div className="entertain">
        <Linked path="entertainment">Entertainment</Linked>: <Linked path="jokes">Jokes Etc</Linked>,
        <Linked path="tv">TV/Movies</Linked>,<Linked path="music">Music/Radio</Linked>,
        <Linked path="celebrities">Celebrities</Linked>,<Linked path="fashion">Fashion</Linked>,
        <Linked path="events">Events</Linked>,<Linked path="sports">Sports</Linked>,
        <Linked path="gaming">Gaming</Linked>,<Linked path="gaming-forum">Forum Games</Linked>,
        <Linked path="literature">Literature</Linked>,
      </div>
      <div className="tech">
        <Linked path="science">science/Technology</Linked>: <Linked path="programming">Programming</Linked>,
        <Linked path="webmasters">Webmasters</Linked>,<Linked path="computers">Computers</Linked>,
        <Linked path="phones">Phones</Linked>,<Linked path="art">Art</Linked>,
        <Linked path="graphics">Graphics & Video</Linked>,<Linked path="tech-market">Technology Market</Linked>,
      </div>
    </div>
  );
}

export default Dashboard;
