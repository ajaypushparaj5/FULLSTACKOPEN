
import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'Adhit',
    'amyooka',
    'harry',
    'Adee',
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0)); // Initialize with zeros

  // Function to select a random anecdote
  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  // Function to vote for the current anecdote
  const handleVote = () => {
    const copy = [...votes];
    copy[selected] += 1; // Increment votes for the current anecdote
    setVotes(copy);
  };

  // Find anecdote with the most votes
  const maxVotes = Math.max(...votes);
  const mostVotesIndex = votes.indexOf(maxVotes);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Candidate Voting</h1>
      
      {/* Current Selected Candidate */}
      <p style={{ fontStyle: 'italic', fontSize: '1.2rem' }}>
        "{anecdotes[selected]}"
      </p>
      <p>has {votes[selected]} votes</p>

      <div>
        <button
          onClick={handleVote}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            cursor: 'pointer',
            borderRadius: '5px',
            marginRight: '10px',
          }}
        >
          Vote
        </button>
        <button
          onClick={handleNextAnecdote}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          Next Candidate
        </button>
      </div>

      {/* Display All Candidates and Votes */}
      <h2>All Candidates and Votes</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {anecdotes.map((candidate, index) => (
          <li key={index} style={{ fontSize: '1.1rem', margin: '5px 0' }}>
            {candidate} - {votes[index]} votes
          </li>
        ))}
      </ul>

      
    </div>
  );
};

export default App;