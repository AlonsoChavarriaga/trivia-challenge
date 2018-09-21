import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => (
  <div className="container home-screen">
    <h1 className="splash-title">
      Welcome to the <br/>Trivia Challenge
    </h1>
    <p className="splash-copy">
      You will be presented with 10 True or False questions.
    </p>
    <p className="splash-copy">
      Can you score 100%?
    </p>
    <div className="begin-quiz-wrapper">
      <Link to="/quiz" className="button begin-quiz">
        Begin
      </Link>
    </div>
  </div>
);

export {Home};