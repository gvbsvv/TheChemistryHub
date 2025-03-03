// pages/learn-more.js

import { useEffect, useState } from 'react';

const LearnMorePage = () => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      // Example function that fetches search results dynamically
      const response = await fetch('/api/search?query=acid-base-chemistry');
      const data = await response.json();
      setSearchResults(data.results);
    };

    fetchSearchResults();
  }, []);

  return (
    <div>
      <h1>Learn More: Acid-Base Chemistry</h1>
      <a href="/acid-base.md">🔙 Back to Acid-Base Chemistry Overview</a>
      
      <h2>Search Results:</h2>
      {searchResults.length ? (
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>
              <a href={result.url}>{result.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading results...</p>
      )}
    </div>
  );
};

export default LearnMorePage;
