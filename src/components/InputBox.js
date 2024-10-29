import React, { useState } from 'react';
import { getAnswers } from '../services/api';

const InputBox = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const answers = await getAnswers(question);
    setResponse(answers);
  };

  return (
    <div className="text-center">
      <h2>Ask me anything about Michael</h2>
      <p className="text-muted">powered by Generative Artificial Intelligence</p>
      <p className="text-danger small">
        Disclaimer: The information provided by this AI is for informational purposes only. Please verify and confirm the answers before taking them at face value.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={handleQuestionChange}
          placeholder="Enter your question"
          className="form-control mb-3"
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {response && <ResponseDisplay response={response} />}
    </div>
  );
};

export default InputBox;