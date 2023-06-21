import React from 'react';
import { Progress, Row, Col, Rate, Button, Image } from 'antd';

const RatingAndReview = () => {
  return (
    <div className="reviewer">
      <Row>
        <Col span={24}>
          <div className="all-comments">
            <div className="comment-container">
              <div className="commenter-info">
                <Image
                  width="10vh"
                  className='commenter-user'
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                />
                <div className="commenter-name-star">
                  <h3>Saleh Alsharif</h3>
                  <Rate className='stars' style={{fontSize:'14px'}} allowHalf defaultValue={3.5} />
                </div>
              </div>
              <div className="comment-content">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum aliquam libero fuga cupiditate distinctio non
                  dignissimos officiis, quaerat quam, odit doloremque harum
                  pariatur vitae consequuntur sit! Ut fugiat sequi quaerat.
                </p>
              </div>
            </div>


            <div className="comment-container">
              <div className="commenter-info">
                <Image
                  width="10vh"
                  className='commenter-user'
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                />
                <div className="commenter-name-star">
                  <h3>Saleh Alsharif</h3>
                  <Rate className='stars' style={{fontSize:'14px'}} allowHalf defaultValue={3.5} />
                </div>
              </div>
              <div className="comment-content">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum aliquam libero fuga cupiditate distinctio non
                  dignissimos officiis, quaerat quam, odit doloremque harum
                  pariatur vitae consequuntur sit! Ut fugiat sequi quaerat.
                </p>
              </div>
            </div>


            <div className="comment-container">
              <div className="commenter-info">
                <Image
                  width="10vh"
                  className='commenter-user'
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                />
                <div className="commenter-name-star">
                  <h3>Saleh Alsharif</h3>
                  <Rate className='stars' style={{fontSize:'14px'}} allowHalf defaultValue={3.5} />
                </div>
              </div>
              <div className="comment-content">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum aliquam libero fuga cupiditate distinctio non
                  dignissimos officiis, quaerat quam, odit doloremque harum
                  pariatur vitae consequuntur sit! Ut fugiat sequi quaerat.
                </p>
              </div>
            </div>
            <div>

            <a href="#" className='see-more'>See More ...</a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RatingAndReview;
