/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  Layout, Row, Col, Button, Menu, Image,
} from 'antd';
import firstFeat from '../../assets/img/feat1.jpeg';
import secFeat from '../../assets/img/feat2.jpeg';
import thirdFeat from '../../assets/img/feat3.jpeg';

function Feature() {
  return (
    <div className="feat-sec">

      <div className="feature-title">
        <h3>
          Our
          {' '}
          <strong>Features</strong>
        </h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
        </p>
      </div>

      <Row className='feat-container'>
        <Col md={12}>
          <Image
            src={firstFeat}
            preview={false}
          />
        </Col>
        <Col md={12}>
          <div className="feature-ele-title">
            <h2>Text, Voice, Video, and More</h2>
            <p>
              Chat with language partners through text and video calls.
              Whatever your communication preference, choose the method that
              best fits your learning goals!
            </p>
          </div>
        </Col>
      </Row>

      <Row className='feat-container'>
        <Col md={12}>
          <div className="feature-ele-title left-text">
            <h2>
              <strong>Intuitive</strong>
              {' '}
              Language Tools
            </h2>
            <p>
              Built-in aids for translation, pronunciation, transliteration,
              and corrections make conversations run smoothly. Learning is as simple as chatting!
            </p>
          </div>
        </Col>

        <Col md={12}>
          <Image
            className='right-image'
            src={secFeat}
            preview={false}
          />
        </Col>
      </Row>

      <Row className='feat-container'>
        <Col md={12}>
          <Image
            src={thirdFeat}
            preview={false}
          />
        </Col>
        <Col md={12}>
          <div className="feature-ele-title">
            <h2>
              Assessments,
              {' '}
              <strong>Quizzes</strong>
              , Tests
            </h2>
            <p>
              Easily launch live assignments, quizzes, and tests.
              Student results are automatically entered in the online gradebook.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Feature;


{/* <div className="feat-sec">
      <div className="feature-title">
        <h3>
          Our
          {' '}
          <strong>Features</strong>
        </h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
        </p>
      </div>
      <Row>
        <div className="feat-container">
          <Col span={12} align="middle" justify="center">
            <Image
              width={350}
              src={firstFeat}
              preview={false}
            />
          </Col>
          <Col span={12} align="middle" justify="center">
            <div className="feature-ele-title">
              <h2>Text, Voice, Video, and More</h2>
              <p>
                Chat with language partners through text and video calls.
                Whatever your communication preference, choose the method that
                best fits your learning goals!
              </p>
            </div>
          </Col>
        </div>

        <div className="feat-container">
          <Col span={12} align="middle" justify="center">
            <div className="feature-ele-title">
              <h2>
                <strong>Intuitive</strong>
                {' '}
                Language Tools
              </h2>
              <p>
                Built-in aids for translation, pronunciation, transliteration,
                and corrections make conversations run smoothly. Learning is as simple as chatting!
              </p>
            </div>
          </Col>

          <Col span={12} align="middle" justify="center">
            <Image
              width={350}
              src={secFeat}
              preview={false}

            />
          </Col>

        </div>

        <div className="feat-container">
          <Col span={12} align="middle" justify="center">
            <Image
              width={350}
              src={thirdFeat}
              preview={false}

            />
          </Col>
          <Col span={12} align="middle" justify="center">

            <div className="feature-ele-title">
              <h2>
                Assessments,
                {' '}
                <strong>Quizzes</strong>
                , Tests
              </h2>
              <p>
                Easily launch live assignments, quizzes, and tests.
                Student results are automatically entered in the online gradebook.

              </p>
            </div>

          </Col>
        </div>
      </Row>
    </div> */}
