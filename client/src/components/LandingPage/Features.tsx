import React from 'react';

function Features() {
  return (
    <div className="features">
      <div className="feature-title">
        <h3>
          Our
          {' '}
          <strong>Features</strong>
        </h3>
        <p>
          TOTC is one powerful online software suite that combines all the tools
        </p>
      </div>

      <div className="features-container">
        <div className="feature-ele-container">
          <img src="../../src/assets/img/feat1.jpeg" alt="" />

          <div className="feature-ele-title">
            <h2>Text, Voice, Video, and More</h2>
            <p>
              Chat with language partners through text and video calls.
              Whatever your communication preference, choose the method that
              best fits your learning goals!

            </p>
          </div>

        </div>

        <div className="feature-ele-container">

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
          <img src="../../src/assets/img/feat2.jpeg" alt="" />

        </div>

        <div className="feature-ele-container">
          <img src="../../src/assets/img/feat3.jpeg" alt="" />

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

        </div>

      </div>
    </div>
  );
}

export default Features;
