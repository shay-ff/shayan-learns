import React from 'react';
import './intro.css';

export default function Intro() {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-text">
          <h1>Hello, I'm Mohammad Ali</h1>
          <p>
            I'm someone who loves building and understanding systems from the ground up. I explore low-level concepts, take on challenging problems, enjoy competitive programming, and share what I learn along the way.
          </p>
          <p>
            This blog is my digital notebook—a space to document thoughts, experiments, and insights. Thanks for stopping by!
          </p>
        </div>
        <div className="intro-image">
          <img src="https://i.ibb.co/S48pKcCh/profile-front.jpg" alt="Mohammad Ali" />
        </div>
      </div>
    </section>
  );
}