  import React, { useEffect, useState } from 'react';
  import { Progress, Row, Col, Rate, Button, Modal, Input } from 'antd';
  const { TextArea } = Input;
  import { UserOutlined } from '@ant-design/icons';
  import axios from 'axios';
  import { useParams } from 'react-router-dom';

  const TotalReview = ({ isSuccess, setIsSuccess }:any) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [review, setReview] = useState({
      comment: '',
      star: 1,
    });
    const [totalRate, setTotalRate] = useState({
      rating: '',
      comments: '',
      stars: [],
    });
    const { profileId } = useParams();

    useEffect(() => {
      
      const rate = async () => {
        try {
          const total = await axios.get(`/api/v1/feedback/total/${profileId}`);          
          const totalStars = total.data.totalStars[0];
          const totalReview = total.data.total[0].avgRating.slice(0, 3);
          const totalComments = total.data.total[0].commentsCount;
          setTotalRate((prev) => ({
            ...prev,
            rating: totalReview,
            comments: totalComments,
            stars: totalStars,
          }));
          setIsSuccess(false)
        } catch (err) {
          console.log(err);
        }
      };
      rate();
    }, [isSuccess, review]);

    const handleRate = (value) => {
      setReview({ ...review, star: value });
    };

    const handleInput = (e) => {
      setReview({ ...review, [e.target.name]: e.target.value });
    };

    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleOk = async (e) => {
      e.preventDefault();
      try {
        await axios.post(`/api/v1/feedback/${profileId}`, review);
        setIsSuccess(true)
        setIsModalOpen(false);
      } catch (err) {
        console.log(err);
      }
    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };

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
                <h1>{totalRate.rating}</h1>
                <Rate
                  disabled={true}
                  allowHalf={true}
                  value={+totalRate.rating}
                />
                <div>
                  <UserOutlined />
                  <span>{totalRate.comments}</span>
                </div>
              </div>
              <div className="total-review-diagram">
                {Object.entries(totalRate.stars).map(([stars, value]) => (
                  <Progress
                    key={stars}
                    percent={(value / 100) * 100}
                    status="active"
                  />
                ))}
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
                    visible={isModalOpen}
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
                        <Rate
                          allowHalf={false}
                          defaultValue={0}
                          className="feed-rate"
                          value={review.star}
                          onChange={handleRate}
                        />

                        <TextArea
                          style={{ width: 450 }}
                          placeholder="Add your comment ..."
                          autoSize={{ minRows: 6, maxRows: 5 }}
                          name="comment"
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
