/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Row, Col, Card } from 'antd';
import target from '../../assets/img/target.png';
import why from '../../assets/img/question.png';
const aboutusDesc = [
  {
    icon: target,
    classN: 'blueIco',
    title: 'Our Mission',
    content: `At Fluentoo, our mission is to connect language enthusiasts 
  from around the globe and facilitate the exchange of knowledge
   and cultural experiences. We believe in fostering meaningful
    connections through language learning, creating a platform
     that promotes cross-cultural understanding and personal growth.`,
  },
  {
    icon: why,
    classN: 'blueIco',
    title: 'Why Fluentoo?',
    content: `At Fluentoo, Irrespective of your proficiency level, whether you're taking your first steps or seeking to master a new language, our meticulously crafted platform caters to your unique learning needs. Through our user-friendly interface and interactive features, Fluentoo provides an optimal setting for acquiring and honoring language abilities.`,
  },
  {
    icon: target,
    classN: 'blueIco',
    title: 'Purpose',
    content: `At Fluentoo, our aim is to create a welcoming and accessible environment for individuals who are eager to explore and refine their language skills.
    Within our community, language enthusiasts, both learners and native speakers alike, come together to embark on an enriching journey of linguistic discovery. By fostering a diverse and inclusive space, we facilitate meaningful language exchanges, conversation practice, and immersive cultural experiences.`,
  },
];

function AboutUs() {
  return (
    <div className="aboutus-sec">
      <Row>
        <Col span={24}>
          <div className="about-title">
            <h3>
              <strong>About Us</strong>
            </h3>
            <p>
              <h2>
                Start your language exchange adventure with us and let the power
                of language transcend borders!"
              </h2>
            </p>
          </div>
        </Col>
      </Row>
      <div className="cards">
        <Row>
          <Col span={8}>
            {aboutusDesc.map((e) => (
              <Card>
                <div className="card-container">
                  <div className={e.classN}>
                    <img width={100} src={e.icon} />
                  </div>
                  <h2>{e.title}</h2>
                  <p>{e.content}</p>
                </div>
              </Card>
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AboutUs;
