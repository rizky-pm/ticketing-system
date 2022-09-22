import React from 'react';
import { useLoaderData } from 'react-router-dom';

const HomePage = () => {
  const data = useLoaderData();

  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
};

export default HomePage;
