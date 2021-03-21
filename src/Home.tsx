import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page">
      <h1>This is HOME page</h1>
      <Link to='/about'>Go to ABOUT</Link>
    </div>
  );
}

export default Home;
