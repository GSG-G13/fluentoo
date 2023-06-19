import React, { useState } from 'react';
import axios from 'axios';
import {
  TranslationOutlined,
  SoundOutlined,
  CopyOutlined,
} from '@ant-design/icons';
import { MessageObjectType } from '../../utils';
import { Select } from 'antd';
const { Option } = Select;

function Message({ text, isOur }: MessageObjectType) {
  const [toText, setToText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [translateFrom, setTranslateFrom] = useState('en-GB');
  const [translateTo, setTranslateTo] = useState('ar-SA');

  const countries = {
    'am-ET': 'Amharic',
    'ar-SA': 'Arabic',
    'be-BY': 'Bielarus',
    'bem-ZM': 'Bemba',
    'bi-VU': 'Bislama',
    'bjs-BB': 'Bajan',
    'bn-IN': 'Bengali',
    'bo-CN': 'Tibetan',
    'br-FR': 'Breton',
    'bs-BA': 'Bosnian',
    'ca-ES': 'Catalan',
    'cop-EG': 'Coptic',
    'cs-CZ': 'Czech',
    'cy-GB': 'Welsh',
    'da-DK': 'Danish',
    'dz-BT': 'Dzongkha',
    'de-DE': 'German',
    'dv-MV': 'Maldivian',
    'el-GR': 'Greek',
    'en-GB': 'English',
    'es-ES': 'Spanish',
    'et-EE': 'Estonian',
    'eu-ES': 'Basque',
    'fa-IR': 'Persian',
    'fi-FI': 'Finnish',
    'fn-FNG': 'Fanagalo',
    'fo-FO': 'Faroese',
    'fr-FR': 'French',
    'gl-ES': 'Galician',
    'gu-IN': 'Gujarati',
    'ha-NE': 'Hausa',
    'he-IL': 'Hebrew',
    'hi-IN': 'Hindi',
    'hr-HR': 'Croatian',
    'hu-HU': 'Hungarian',
    'id-ID': 'Indonesian',
    'is-IS': 'Icelandic',
    'it-IT': 'Italian',
    'ja-JP': 'Japanese',
    'kk-KZ': 'Kazakh',
    'km-KM': 'Khmer',
    'kn-IN': 'Kannada',
    'ko-KR': 'Korean',
    'ku-TR': 'Kurdish',
    'ky-KG': 'Kyrgyz',
    'la-VA': 'Latin',
    'lo-LA': 'Lao',
    'lv-LV': 'Latvian',
    'men-SL': 'Mende',
    'mg-MG': 'Malagasy',
    'mi-NZ': 'Maori',
    'ms-MY': 'Malay',
    'mt-MT': 'Maltese',
    'my-MM': 'Burmese',
    'ne-NP': 'Nepali',
    'niu-NU': 'Niuean',
    'nl-NL': 'Dutch',
    'no-NO': 'Norwegian',
    'ny-MW': 'Nyanja',
    'ur-PK': 'Pakistani',
    'pau-PW': 'Palauan',
    'pa-IN': 'Panjabi',
    'ps-PK': 'Pashto',
    'pis-SB': 'Pijin',
    'pl-PL': 'Polish',
    'pt-PT': 'Portuguese',
    'rn-BI': 'Kirundi',
    'ro-RO': 'Romanian',
    'ru-RU': 'Russian',
    'sg-CF': 'Sango',
    'si-LK': 'Sinhala',
    'sk-SK': 'Slovak',
    'sm-WS': 'Samoan',
    'sn-ZW': 'Shona',
    'so-SO': 'Somali',
    'sq-AL': 'Albanian',
    'sr-RS': 'Serbian',
    'sv-SE': 'Swedish',
    'sw-SZ': 'Swahili',
    'ta-LK': 'Tamil',
    'te-IN': 'Telugu',
    'tet-TL': 'Tetum',
    'tg-TJ': 'Tajik',
    'th-TH': 'Thai',
    'ti-TI': 'Tigrinya',
    'tk-TM': 'Turkmen',
    'tl-PH': 'Tagalog',
    'tn-BW': 'Tswana',
    'to-TO': 'Tongan',
    'tr-TR': 'Turkish',
    'uk-UA': 'Ukrainian',
    'uz-UZ': 'Uzbek',
    'vi-VN': 'Vietnamese',
    'wo-SN': 'Wolof',
    'xh-ZA': 'Xhosa',
    'yi-YD': 'Yiddish',
    'zu-ZA': 'Zulu',
  };

  const handleCopy = () => {
    const textToCopy = text;
    navigator.clipboard.writeText(textToCopy);
  };

  const handleTextToSpeech = () => {
    const textToSpeech = text;
    const lang = translateFrom;
    const utterance = new SpeechSynthesisUtterance(textToSpeech);
    utterance.lang = lang;
    speechSynthesis.speak(utterance);
  };


  const handleTranslate = async () => {
    const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      text
    )}&langpair=${translateFrom}|${translateTo}`;
  
    try {
      const res = await axios.get(apiUrl);
      const translation = res.data.responseData.translatedText;
      setTranslatedText(translation);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className={isOur ? 'message own' : 'message'}>
      <p className="text">{text}</p>
      {translatedText && text && <p>{translatedText}</p>}
      <div className="controler">
        <div className="icons">
          <span>
            <TranslationOutlined onClick={handleTranslate} />
          </span>
          <span>
            <CopyOutlined onClick={handleCopy} />
          </span>
          <span>
            <SoundOutlined onClick={handleTextToSpeech} />
          </span>

          <div className="language-choices">
            <span className="select-title">Your Language :</span>

            <Select
              size="small"
              showArrow={false}
              value={translateFrom}
              onChange={(value) => setTranslateFrom(value)}
            >
              {Object.entries(countries).map(([code, name]) => (
                <Option key={code} value={code}>
                  {name}
                </Option>
              ))}
            </Select>

            <span className="select-title">Translate to :</span>

            <Select
              size="small"
              showArrow={false}
              value={translateTo}
              onChange={(value) => setTranslateTo(value)}
            >
              {Object.entries(countries).map(([code, name]) => (
                <Option key={code} value={code}>
                  {name}
                </Option>
              ))}
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
