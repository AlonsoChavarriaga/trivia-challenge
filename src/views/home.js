import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => (
  <div className="home-screen">
    <h1 className="splash-title">
      Welcome to the Trivia Challenge
    </h1>
    <p className="splash-copy">
      You will be presented with 10 True or False questions.
    </p>
    <p>
      Can you score 100%?
    </p>
    <Link to="/quiz" className="button begin-quiz">
      Begin
    </Link>
  </div>
);

export {Home};