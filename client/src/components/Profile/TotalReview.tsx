import React, { useState } from 'react';
import { Progress, Row, Col, Rate, Button, Modal, Input } from 'antd';
const { TextArea } = Input;
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TotalReview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [review, setReview] = useState({
    comment: '',
    star: 1,
  })


  const handleRate = (value) =>{
    setReview({...review, star:value});
  }

  const handleInput = (e) =>{
    setReview({...review, [e.target.name]:e.target.value});
  };



  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (e) => {
    e.preventDefault();
    axios.post(`/api/v1/feedback/${profileId}`,review)
    .then(res => console.log(res,'uuuuuuuu'))
    .catch(err => console.log(err))
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const {profileId} = useParams();




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
              <Rate defaultValue={3.5} disabled={true} allowHalf={false}/>
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
              <>
                <Button
                  onClick={showModal}
                  type="primary"
                  shape="round"
                  style={{ width: '30vh', backgroundColor: 'black' }}
                >
                  WRITE & REVIEW
                </Button>

                <Modal
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  width={1000}
                >
                  <div className="add-feedback">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/001/829/872/original/guy-gives-likes-and-positive-ratings-with-a-hand-thumb-up-symbol-and-notification-five-stars-service-product-rate-recommendation-opinion-and-customer-approve-illustration-for-web-landing-page-free-vector.jpg"
                      alt=""
                      style={{ width: 400 }}
                    />
                    <div className="feedback-form">
                      <h1>Add your rate:</h1>
                      <Rate allowHalf={false} defaultValue={0} className="feed-rate" value={review.star} onChange={handleRate}/>

                      <TextArea
                        style={{ width: 450 }}
                        placeholder="Add your comment ..."
                        autoSize={{ minRows: 6, maxRows: 5 }}
                        name='comment'
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                </Modal>
              </>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TotalReview;
