import React, { useState } from 'react';
import './Translator.css';

const Translator = () => {
    const [text, setText] = useState('');
    const [sourceLang, setSourceLang] = useState('en');
    const [targetLang, setTargetLang] = useState('es');
    const [translatedText, setTranslatedText] = useState('');
    const [error, setError] = useState('');

    const languages = {
        "Afrikaans": "af",
        "Albanian": "sq",
        "Amharic": "am",
        "Arabic": "ar",
        "Armenian": "hy",
        "Azerbaijani": "az",
        "Basque": "eu",
        "Belarusian": "be",
        "Bengali": "bn",
        "Bosnian": "bs",
        "Bulgarian": "bg",
        "Catalan": "ca",
        "Cebuano": "ceb",
        "Chichewa": "ny",
        "Chinese (Simplified)": "zh-CN",
        "Chinese (Traditional)": "zh-TW",
        "Corsican": "co",
        "Croatian": "hr",
        "Czech": "cs",
        "Danish": "da",
        "Dutch": "nl",
        "English": "en",
        "Esperanto": "eo",
        "Estonian": "et",
        "Filipino": "tl",
        "Finnish": "fi",
        "French": "fr",
        "Frisian": "fy",
        "Galician": "gl",
        "Georgian": "ka",
        "German": "de",
        "Greek": "el",
        "Gujarati": "gu",
        "Haitian Creole": "ht",
        "Hausa": "ha",
        "Hawaiian": "haw",
        "Hebrew": "he",
        "Hindi": "hi",
        "Hmong": "hmn",
        "Hungarian": "hu",
        "Icelandic": "is",
        "Igbo": "ig",
        "Indonesian": "id",
        "Irish": "ga",
        "Italian": "it",
        "Japanese": "ja",
        "Javanese": "jw",
        "Kannada": "kn",
        "Kazakh": "kk",
        "Khmer": "km",
        "Kinyarwanda": "rw",
        "Korean": "ko",
        "Kurdish (Kurmanji)": "ku",
        "Kyrgyz": "ky",
        "Lao": "lo",
        "Latin": "la",
        "Latvian": "lv",
        "Lithuanian": "lt",
        "Luxembourgish": "lb",
        "Macedonian": "mk",
        "Malagasy": "mg",
        "Malay": "ms",
        "Malayalam": "ml",
        "Maltese": "mt",
        "Maori": "mi",
        "Marathi": "mr",
        "Mongolian": "mn",
        "Myanmar (Burmese)": "my",
        "Nepali": "ne",
        "Norwegian": "no",
        "Odia (Oriya)": "or",
        "Pashto": "ps",
        "Persian": "fa",
        "Polish": "pl",
        "Portuguese": "pt",
        "Punjabi": "pa",
        "Romanian": "ro",
        "Russian": "ru",
        "Samoan": "sm",
        "Scots Gaelic": "gd",
        "Serbian": "sr",
        "Sesotho": "st",
        "Shona": "sn",
        "Sindhi": "sd",
        "Sinhala": "si",
        "Slovak": "sk",
        "Slovenian": "sl",
        "Somali": "so",
        "Spanish": "es",
        "Sundanese": "su",
        "Swahili": "sw",
        "Swedish": "sv",
        "Tajik": "tg",
        "Tamil": "ta",
        "Tatar": "tt",
        "Telugu": "te",
        "Thai": "th",
        "Turkish": "tr",
        "Turkmen": "tk",
        "Ukrainian": "uk",
        "Urdu": "ur",
        "Uyghur": "ug",
        "Uzbek": "uz",
        "Vietnamese": "vi",
        "Welsh": "cy",
        "Xhosa": "xh",
        "Yiddish": "yi",
        "Yoruba": "yo",
        "Zulu": "zu"
    };

    const handleTranslateClick = async () => {
        const url = "https://text-translator2.p.rapidapi.com/translate";

        const payload = new URLSearchParams({
            source_language: sourceLang,
            target_language: targetLang,
            text: text
        });

        const headers = {
            "content-type": "application/x-www-form-urlencoded",
            "X-RapidAPI-Key": "6304e998c4msh0a5d262ea2d4512p120770jsne3dba4274335",
            "X-RapidAPI-Host": "text-translator2.p.rapidapi.com"
        };

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: headers,
                body: payload
            });

            const res = await response.json();

            if (res.status === "success") {
                setTranslatedText(res.data.translatedText);
                setError('');
            } else {
                setError("Translation Failed");
                setTranslatedText('');
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
            console.error("Error:", err);
            setTranslatedText('');
        }
    };

    return (
        <div className="translator-page">
            <h1>Translator</h1>
            <textarea
                placeholder="Enter text to translate"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="translator-input-box"
            />
            <div className="dropdowns">
                <select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
                    {Object.entries(languages).map(([name, code]) => (
                        <option key={code} value={code}>{name}</option>
                    ))}
                </select>
                <span>➜</span>
                <select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
                    {Object.entries(languages).map(([name, code]) => (
                        <option key={code} value={code}>{name}</option>
                    ))}
                </select>
            </div>
            <button onClick={handleTranslateClick} className="translate-btn"><strong>Translate</strong></button>
            {error && <h2 style={{ color: 'red' }}>{error}</h2>}
            {translatedText && (
                <div className="translated-result">
                    <h3>Translated Text:</h3>
                    <p>{translatedText}</p>
                </div>
            )}
        </div>
    );
};

export default Translator;
