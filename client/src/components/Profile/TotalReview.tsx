import React from 'react';
import { Progress, Row, Col, Rate, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const TotalReview = () => {
  return (
    <div className="total">
      <Row>
        <Col span={24}>
          <div className="rate-title">
            <h1>
              {' '}
              <strong>Rating</strong> And Review
            </h1>
          </div>
          <div className="review-container">
            <div className="total-review">
              <h1>4.3</h1>
              <Rate allowHalf defaultValue={3.5} />
              <div>
                <UserOutlined />
                <span>15,372 reviewer</span>
              </div>
            </div>

            <div className="total-review-diagram">
              <Progress percent={30} />
              <Progress percent={30} />
              <Progress percent={30} />
              <Progress percent={30} />
              <Progress percent={50} status="active" />
            </div>

            <div className="write-and-review-btn">
              <Button
                type="primary"
                shape="round"
                style={{ width: '30vh', backgroundColor: 'black' }}
              >
                WRITE & REVIEW
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TotalReview;
