import React from 'react';
import InputBox from '../components/InputBox';
import ResponseDisplay from '../components/ResponseDisplay';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <InputBox />
      <ResponseDisplay />
    </div>
  );
};

export default HomePage;