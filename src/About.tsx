import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="page">
      <h1>This is ABOUT page</h1>
      <Link to='/'>Go to HOME</Link>
    </div>
  );
}

export default About;
