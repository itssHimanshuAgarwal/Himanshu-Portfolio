import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <blockquote className="blockquote mb-0">
  <p style={{ textAlign: "justify" }}>
    Hi Everyone, I’m <span className="purple">Himanshu</span>, and I’m passionate about exploring new ideas, doing something impactful, and living life to the fullest.
    <br /><br />
    When I’m not immersed in work, you’ll find me indulging in my love for sports—cricket, football, and badminton keep me energized and inspired. Traveling is another passion of mine, and I’ve already ticked 12 countries off my list, with 195 in my sights.
    <br /><br />
    I also enjoy learning new languages. While I’m fluent in English, Hindi, and Spanish, I’m always eager to pick up new ones.
    <br /><br />
    Fun fact about me: I can rock a suit 24/7 and still feel completely at home in it!
  </p>
  <ul>
    <li className="about-activity">
      <ImPointRight /> Playing Sports
    </li>
    <li className="about-activity">
      <ImPointRight /> Traveling
    </li>
    <li className="about-activity">
      <ImPointRight /> Learning New Languages
    </li>
  </ul>

  <p style={{ color: "rgb(155 126 172)" }}>
    "Strive to explore, build, and live with purpose."
  </p>
  <footer className="blockquote-footer">Himanshu</footer>
</blockquote>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
