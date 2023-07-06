import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'antd';
import { LockOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { quizLevelType, QuizType } from '../../utils';
import { QuizModal } from '../../components';
import './style.modules.css';

const Quizzes = () => {
  const [level, setLevel] = useState<Partial<quizLevelType>>({});
  const [currentQuiz, setCurrentQuiz] = useState<Partial<QuizType>>({});
  const [quizzesNumber, setQuizzesNumber] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getLevel = (levelNumber: number) => {
    if (levelNumber <= 3) {
      return {
        count: levelNumber,
        text: 'Easy',
        color: '#66cc66',
      };
    } else if (levelNumber <= 6) {
      return {
        count: levelNumber,
        text: 'Intermediate',
        color: '#ff9900',
      };
    } else if (levelNumber <= 8) {
      return {
        count: levelNumber,
        text: 'Hard',
        color: '#ff0000',
      };
    } else {
      return {
        count: levelNumber,
        text: 'Advanced',
        color: '#800080',
      };
    }
  }
  console.log(currentQuiz.questions, 'ggg');

  const handleQuizOpen = (quizId: number) => {
    if (level.count) {
      if (quizId === (level.count + 1)) {
        setIsModalOpen(true);
      }
    }
  }

  useEffect(() => {
    const count = 2;
    const level = getLevel(count)

    setLevel(level);
  }, []);

  useEffect(() => {
    setQuizzesNumber(10)
    setCurrentQuiz({
      "quiz_id": 8,
      "questions": [
        {
          "question": "What is the plural form of 'dog'?",
          "options": [
            "dogs",
            "doges",
            "doggies",
            "dogy"
          ],
          "correct_answer": "dogs"
        },
        {
          "question": "What is the comparative form of 'beautiful'?",
          "options": [
            "beautifuler",
            "beautifuller",
            "more beautiful",
            "beautifulier"
          ],
          "correct_answer": "more beautiful"
        },
        {
          "question": "Choose the correct preposition: The ball is ___ the box.",
          "options": [
            "in",
            "on",
            "at",
            "above"
          ],
          "correct_answer": "in"
        },
        {
          "question": "What is the opposite of 'sad'?",
          "options": [
            "glad",
            "happy",
            "joyful",
            "cheerful"
          ],
          "correct_answer": "happy"
        },
        {
          "question": "What is the past tense of 'drink'?",
          "options": [
            "drinked",
            "drank",
            "drunk",
            "drunken"
          ],
          "correct_answer": "drank"
        }
      ]
    },);
  }, []);

  const quizzesCards = []
  for (let i = 1; i <= quizzesNumber; i++) {
    const quizLevel = getLevel(i);

    if (level.count) {
      quizzesCards.push((
        <Col key={i} xs={24} sm={12} md={8}>
          <Card
            title={`Quiz ${i}`}
            className={i < level.count + 1 ? 'done' : i > level.count + 1 ? 'closed' : ""}
            bordered={true}
            hoverable={true}
            onClick={() => handleQuizOpen(i)}
          >
            {i < level.count + 1 && <CheckCircleOutlined className='checkIcon' />}
            {i > level.count + 1 && <LockOutlined className='lockIcon' />}
            <p>Level <span style={{ color: quizLevel.color, fontWeight: 'bold' }}>{quizLevel.text}</span></p>
          </Card>
        </Col >
      ))
    }
  }


  return (
    <div className='quizzes container'>
      <div className='control'>
        <div className='level'>Your Level: <span style={{ color: level.color }}>{level.text}</span></div>
      </div>
      <div className='quizzes-wrapper'>
        <Row>
          {quizzesCards}
        </Row>
        <QuizModal questions={currentQuiz.questions} level={level} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </div>
  )
}

export default Quizzes;