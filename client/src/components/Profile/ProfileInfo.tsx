import React, { useState } from 'react';
import { Row, Col, Image, Input, Button } from 'antd';
import insta from '../../assets/img/insta.png';
import facebook from '../../assets/img/facebook.png';
import twitter from '../../assets/img/twitter.png';
import tunisFlag from '../../assets/img/tunisFlag.png';
import { SendOutlined } from '@ant-design/icons';

const ProfileInfo = () => {
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <div>
      <Row>
        <Col span={24}>
          <div className="profile-container-bg">
            <div className="profile-img-bg">
              <div className="profile-img">
                <Image
                  width="65vh"
                  src="https://s.abcnews.com/images/GMA/tom-holland-file-gty-jef-230614_1686763040439_hpMain_1x1_992.jpg"
                />
              </div>
              <div className="profile-info-container">
                <Image width="12vh" src={tunisFlag} />

                <div className="user-info">
                  <span className="age">23 y.o</span>

                  <h1>Tom Ahmed Holland</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit quia totam doloremque voluptatibus veniam ipsum
                    aspernatur est, similique accusantium atque incidunt ab
                    odio, vitae ipsa culpa, consequatur voluptatum possimus
                    nobis.
                  </p>
                </div>

                <div className="soical-media">
                  <Image width="6vh" src={facebook} />
                  <Image width="6vh" src={insta} />
                  <Image width="6vh" src={twitter} />
                </div>
                <div className="msg-input-btn">
                  <Input placeholder="Send Message" />
                  <Button
                    type="primary"
                    style={{width:'100%'}}
                    icon={<SendOutlined />}
                    loading={loadings[1]}
                    onClick={() => enterLoading(1)}
                  >
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileInfo;
