import { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const sendSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://api.github.com/?`)
  }


  return (
    <div className="container mt-3">
      <form onSubmit={e=> sendSearch(e)}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
        <button className="btn btn-primary m-2">Submit</button>
      </form>
    </div>
  );
}

export default App;
