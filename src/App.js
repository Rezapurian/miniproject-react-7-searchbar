import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResultsList from './components/SearchResultsList';

function App() {
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      <SearchBar setResults={setResults} />
      <SearchResultsList results={results} />
    </div>
  );
}

export default App;
