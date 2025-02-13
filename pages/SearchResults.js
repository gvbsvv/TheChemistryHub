import { useEffect, useState } from 'react';

const SearchResults = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      // Replace with your API endpoint or search logic
      const response = await fetch('/api/search?query=acid-base-chemistry');
      const data = await response.json();
      setResults(data.results);
    };

    fetchSearchResults();
  }, []);

  return (
    <div>
      <h2>Search Results:</h2>
      {results.length > 0 ? (
        <ul>
          {results.map((result, index) => (
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
export default SearchResults;