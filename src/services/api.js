// api.js

// Function to make an API call to Amazon Sagemaker and retrieve answers for user questions
export async function getAnswers(question) {
  try {
    const response = await fetch('https://your-sagemaker-endpoint.com/answers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });

    if (!response.ok) {
      throw new Error('Failed to retrieve answers');
    }

    const data = await response.json();
    return data.answers;
  } catch (error) {
    console.error(error);
    return null;
  }
}