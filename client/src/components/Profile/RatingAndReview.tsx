import React, { useEffect, useState } from 'react';
import { Rate, Image, Card } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RatingAndReview = ({ isSuccess }: any) => {
  const [feedback, setFeedback] = useState([]);
  const { profileId } = useParams();

  useEffect(() => {
    const userFeedback = async () => {
      try {
        const {
          data: { data },
        } = await axios.get(`/api/feedback/${profileId}`);
        setFeedback(data);
      } catch (err) {
        console.log(err);
      }
    };
    userFeedback();
  }, [isSuccess]);

  return (
    <div className='reviewer'>
      <Card style={{ width: 800 }} className='reviews-card'>
        <div className='all-comments'>
          {feedback.map((e: any) => (
            <div className='comment-container'>
              <div className='commenter-info'>
                <Image
                  width={70}
                  className='commenter-user'
                  src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                />
                <div className='commenter-name-star'>
                  <h3>{e.user.username}</h3>
                  <Rate
                    className='stars'
                    style={{ fontSize: '14px' }}
                    allowHalf
                    defaultValue={e.star}
                    disabled={true}
                  />
                </div>
              </div>
              <div className='comment-content'>
                <p>{e.comment}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <a href='#' className='see-more'>
            See More ...
          </a>
        </div>
      </Card>
    </div>
  );
};

export default RatingAndReview;
