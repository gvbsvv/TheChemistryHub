// components/LearnMoreComponent.js
import { useEffect, useState } from 'react';

const LearnMoreComponent = () => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch('/api/search?query=acid-base-chemistry');
        const data = await response.json();
        setSearchResults(data.results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, []);

  return (
    <div>
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

export default LearnMoreComponent;
