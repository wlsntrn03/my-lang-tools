import React, { useState } from 'react';
import './Thesaurus.css';

const Thesaurus = () => {
  const [word, setWord] = useState('');
  const [synonymsList, setSynonymsList] = useState([]);
  const [antonymsList, setAntonymsList] = useState([]);
  const [error, setError] = useState('');

  const handleThesaurusClick = async () => {
    if (word.trim().length < 1) {
      setError("No Word Provided");
      setSynonymsList([]);
      setAntonymsList([]);
      return;
    }

    let res;
    try {
      const req = await fetch(`https://api.api-ninjas.com/v1/thesaurus?word=${word.trim()}`, {
        method: 'GET',
        headers: {
          'X-Api-Key': 'm5zFoyKbvUw3cLwbVT3ilw==2roK5cJKsRxzCINB',
        },
      });

      res = await req.json();

      const list1 = res.synonyms.map((word, index) => (res.synonyms[index] + ", "));
      list1[list1.length - 1] = list1[list1.length - 1].slice(0, -2);
      
      if (list1.toString().startsWith(",")) {
        setSynonymsList(["N/A"]);
      }
      else {
        setSynonymsList(list1);
      }

      const list2 = res.antonyms.map((word, index) => (res.antonyms[index] + ", "));
      list2[list2.length - 1] = list2[list2.length - 1].slice(0, -2);

      if (list2.toString().startsWith(",")) {
        setAntonymsList(["N/A"]);
      }
      else {
        setAntonymsList(list2);
      }

      setError("");
    } catch (err) {
      setError('No Synonyms or Antonyms Found');
      setSynonymsList([]);
      setAntonymsList([]);
    }
  };

  return (
    <div className="thesaurus-page">
      <h1>Thesaurus</h1>
      <div>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Enter a word"
          className="thesaurus-input-box"
        />
        <button onClick={handleThesaurusClick} className="thesaurize-btn">Thesaurize</button>
      </div>

      {error && <h2 style={{ color: 'red', whiteSpace: 'pre-wrap' }}>{error}</h2>}

      {synonymsList.length > 0 && (
        <div className="thesaurus-results">
          <div className="thesaurus-card">
            <p>
              <h3>Synonyms</h3>
            </p>
            <p>{synonymsList}</p>
          </div>
          <div className="thesaurus-card">
            <p>
              <h3>Antonyms</h3>
            </p>
            <p>{antonymsList}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Thesaurus;
