import React, { useState } from 'react';
import './Dictionary.css';

const Dictionary = () => {
    const [word, setWord] = useState('');
    const [error, setError] = useState('');
    const [definitionList, setDefinitionList] = useState([]);

    const handleDefineClick = async () => {
        if (word.trim().length < 1) {
            setError('No Word Provided');
            setDefinitionList([]);
            return;
        }

        let res;
        try {
            const req = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word.trim());
            res = await req.json();

            const list = res[0].meanings.map((meaning, index) => (
                <div key={index} className="definition-card">
                    <p>
                        <strong>{index + 1}.</strong> <code>{meaning.partOfSpeech}</code>
                    </p>
                    <p>{meaning.definitions[0].definition}</p>
                </div>
            ));

            setDefinitionList(list);
            setError('');
        } catch (err) {
            if (res && res.title) {
                setError(res.title);
            } else {
                setError("No Definitions Found");
            }
            setDefinitionList([]);
        }
    };

    return (
        <div className="dictionary-page">
            <h1>Dictionary</h1>
            <div>
                <input
                    type="text"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    placeholder="Enter a word"
                    className="input-box"
                />
                <button onClick={handleDefineClick} className="input-btn">Define</button>
            </div>

            {error && <h2 style={{ color: 'red', whiteSpace: 'pre-wrap' }}>{error}</h2>}

            {definitionList.length > 0 && (
                <div className="definition-results">
                    {definitionList}
                </div>
            )}

        </div>
    );
};

export default Dictionary;
