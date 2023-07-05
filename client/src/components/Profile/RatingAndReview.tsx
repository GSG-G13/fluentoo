import React, { useEffect, useState } from 'react';
import { Progress, Row, Col, Rate, Button, Image } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RatingAndReview = ({ isSuccess, setIsSuccess }:any) => {
  const [feedback, setFeedback] = useState([]);
  const { profileId } = useParams();

  useEffect(() => {
    const userFeedback = async () => {
      try {
        const res = await axios.get(`/api/v1/feedback/${profileId}`);
        const data = res.data;
        setFeedback(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    userFeedback();
  }, [isSuccess]);

  return (
    <div className="reviewer">
      <Row>
        <Col span={24}>
          <div className="all-comments">
            {feedback.map((item, index) => (
              <div className="comment-container">
                <div className="commenter-info">
                  <Image
                    width="10vh"
                    className="commenter-user"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  />
                  <div className="commenter-name-star">
                    <h3 key={index}>{item.user.username}</h3>
                    <Rate
                      className="stars"
                      style={{ fontSize: '14px' }}
                      allowHalf
                      defaultValue={item.star}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="comment-content">
                  <p key={index}>{item.comment}</p>
                </div>
              </div>
            ))}
            <div>
              <a href="#" className="see-more">
                See More ...
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RatingAndReview;
