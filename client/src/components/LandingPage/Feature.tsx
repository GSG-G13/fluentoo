/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Row, Col, Image } from 'antd';
import firstFeat from '../../assets/img/feat1.jpeg';
import secFeat from '../../assets/img/feat2.jpeg';
import thirdFeat from '../../assets/img/feat3.jpeg';

const featuersContent = [
  {
    imgSrc: firstFeat,
    imgAlt: 'text and video calls Feature',
    featTitle: 'Text, Voice, Video, and More',
    featContent: `Chat with language partners through text and video calls. Whatever
  your communication preference, choose the method that best fits
  your learning goals!`,
  },
  {
    imgSrc: secFeat,
    imgAlt: 'learning Feature',
    featTitle: 'Intuitive Language Tools',
    featContent: `
    Built-in aids for translation, pronunciation, transliteration, and
    corrections make conversations run smoothly. Learning is as simple
    as chatting!`,
  },
  {
    imgSrc: thirdFeat,
    imgAlt: 'quizzez Feature',
    featTitle: `Assessments, Quizzes, Tests`,
    featContent: `Easily launch live assignments, quizzes, and tests. Student
    results are automatically entered in the online gradebook.`,
  },
];

function Feature() {
  return (
    <div className='feat-sec'>
      <div className='feature-title'>
        <h3>
          Our <strong>Features</strong>
        </h3>
        <p>
          <h2>
            Immerse yourself in a global language learning community with
            interactive features.
          </h2>
        </p>
      </div>

      {featuersContent.map((w) => (
        <Row className='feat-container' style={{ padding: '0px 50px' }}>
          <Col md={12}>
            <Image src={w.imgSrc} preview={false} alt={w.imgAlt} />
          </Col>
          <Col md={12}>
            <div className='feature-ele-title'>
              <h2>{w.featTitle}</h2>
              <p>{w.featContent}</p>
            </div>
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default Feature;
