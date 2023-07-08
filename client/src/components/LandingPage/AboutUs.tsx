/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Row, Col, Card } from "antd";
import {
  FileTextOutlined,
  CalendarOutlined,
  UserOutlined,
} from "@ant-design/icons";

const aboutUsDesc = [
  {
    icon: <FileTextOutlined />,
    classN: "blueIco",
    content: `At Fluentoo, our mission is to connect language enthusiasts 
  from around the globe and facilitate the exchange of knowledge
   and cultural experiences. We believe in fostering meaningful
    connections through language learning, creating a platform
     that promotes cross-cultural understanding and personal growth.`,
  },
  {
    icon: <CalendarOutlined />,
    classN: "greenIco",
    content: `Fluentoo provides a user-friendly platform for individuals seeking 
  to learn and practice different languages. With a diverse community
   of language learners and native speakers, we offer a dynamic space 
   to engage in language exchange, conversation practice, and cultural
    immersion. Whether you're a beginner or an advanced learner, our platform
     is designed to cater to your language learning needs.`,
  },
  {
    icon: <UserOutlined />,
    classN: "pinkIco",
    content: `At Fluentoo, we prioritize building a supportive and inclusive
    community. Our platform is driven by passionate language learners
    who share their knowledge and experiences with others. Through interactive
    features, discussion forums, and language-specific groups, we encourage users
    to engage actively, help one another, and create meaningful connections that
    go beyond language exchange.`,
  },
];
function AboutUs() {
  return (
    <div className="about-us-sec">
      <Row>
        <Col span={24}>
          <div className="about-title">
            <h3>
              <strong>About Us</strong> ,Language Exchange
            </h3>
            <p>
              Start your language exchange adventure with us and let the power
              of language transcend borders!'
            </p>
          </div>
        </Col>
      </Row>
      <div className="cards">
        <Row>
          <Col span={8}>
            {aboutUsDesc.map((e, i) => (
              <Card key={i}>
                <div className="card-container">
                  <div className={e.classN}>{e.icon}</div>
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
