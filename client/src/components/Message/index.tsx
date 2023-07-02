import React, { useState } from 'react';
import axios from 'axios';
import {
  TranslationOutlined,
  SoundOutlined,
  CopyOutlined,
} from '@ant-design/icons';
import { MessageObjectType } from '../../utils';
import { Select,Collapse, Alert } from 'antd';
import countries from '../../assets/helper/country';
const {Panel}= Collapse;
const { Option } = Select;

function Message({ content, sender, receiver, isOur }: MessageObjectType) {
  const [translatedText, setTranslatedText] = useState('');
  const [translateFrom, setTranslateFrom] = useState('en-GB');
  const [translateTo, setTranslateTo] = useState('ar-SA');
  const [copy, setCopy] = useState(false);
  const [translate, setTranslate] = useState(false);

 
  const handleCopy = () => {
    const textToCopy = content;
    navigator.clipboard.writeText(textToCopy);
    setCopy(true);
    setTimeout(()=>{
      setCopy(false)
    },1000)
  };

  const handleTextToSpeech = () => {
    const textToSpeech = content;
    const lang = translateFrom;
    const utterance = new SpeechSynthesisUtterance(textToSpeech);
    utterance.lang = lang;
    speechSynthesis.speak(utterance);
  };


  const handleTranslate = async () => {
    const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      content
    )}&langpair=${translateFrom}|${translateTo}`;
  
    try {
      const res = await axios.get(apiUrl);
      const translation = res.data.responseData.translatedText;
      setTranslatedText(translation);
      setTranslate(!translate)
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className={isOur ? 'message own' : 'message'}>
      <p className="text">{content}</p>
      {translatedText && translate &&content && <p>{translatedText}</p>}
      <div className="controler">
      <div className="features">

          <span style={{position: 'relative'}}>
          {copy ?<Alert message="Copied!" type="warning" className='copy-alert'/>:null}
            <CopyOutlined onClick={handleCopy }/>
    
          </span>
          <span>
            <SoundOutlined onClick={handleTextToSpeech} />
          </span>
          <span>
      <TranslationOutlined onClick={handleTranslate} />
    </span>
<Collapse size='small'>
<Panel header="" key="1">
  <div className="icons">

    <div className="language-choices">

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

      <span className="select-title">to :</span>

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
</Panel>
</Collapse>
   
    </div>
      </div>
    </div>
  );
}

export default Message;
