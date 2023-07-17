import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'antd';
import { LockOutlined, CheckCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
import { QuizType, QuizLevelType, getQuizRank } from '../../utils';
import { QuizModal, Menu } from '../../components';
import { useProfileContext } from '../../context/ProfileContext';
import './style.modules.css';

const Quizzes = () => {
  const { profileData: { practiceLanguages } } = useProfileContext();
  const [selectedLanguage, setSelectedLanguage] = useState<string>(practiceLanguages[0])
  const [level, setLevel] = useState<number>(0);
  const [allQuizzesLevels, setAllQuizzesLevels] = useState<QuizLevelType[]>([]);
  const [currentQuizId, setCurrentQuizId] = useState<number>(0);
  const [currentQuiz, setCurrentQuiz] = useState<QuizType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noQuizzesAvailable, setNoQuizzesAvailable] = useState<boolean>(false);

  useEffect(() => {
    (async function () {
      const { data: quizData } = await axios.get(`/api/quiz/${selectedLanguage}`);
      if (quizData.msg === 'Quiz Returned Successfully') {
        setLevel(quizData.data.userLevel);
        setAllQuizzesLevels(quizData.data.allQuizzesLevels);
        setCurrentQuizId(quizData.data.currentQuiz.id);
        setCurrentQuiz(quizData.data.currentQuiz);
        setNoQuizzesAvailable(false)
      } else if (quizData.msg === 'Quizzes Number Returned Successfully') {
        if (quizData.data === 0) {
          setLevel(0);
          setAllQuizzesLevels([]);
          setCurrentQuizId(0);
          setCurrentQuiz(null);
          setNoQuizzesAvailable(true);
        } else {
          setAllQuizzesLevels(quizData.data.allQuizzesLevels);
          setLevel(quizData.data.userLevel);
          setCurrentQuiz(null);
          setNoQuizzesAvailable(false)
        }
      }
    })()
  }, [selectedLanguage, currentQuizId]);

  const handleQuizOpen = (quizId: number) => {
    if (quizId === currentQuizId) {
      setIsModalOpen(true);
    }
  }

  const allQuizzesLevelsCards = allQuizzesLevels.map((quiz, i) => {
    const quizRank = getQuizRank(+quiz.level);
    return (
      <Col key={i} xs={24} sm={12} md={8}>
        <Card
          title={`Quiz ${i + 1}`}
          className={i + 1 < level + 1 ? 'done' : i + 1 > level + 1 ? 'closed' : ""}
          bordered={true}
          hoverable={true}
          onClick={() => handleQuizOpen(i + 1)}
        >
          {i + 1 < level + 1 && <CheckCircleOutlined className='checkIcon' />}
          {i + 1 > level + 1 && <LockOutlined className='lockIcon' />}
          <p>Rank <span style={{ color: quizRank?.color, fontWeight: 'bold' }}>{quizRank?.text}</span></p>
        </Card>
      </Col >
    )
  })

  return (
    <div className='quizzes container'>
      <div className='control'>
        <div className='level'>Your Level: <span>{level}</span></div>
        <div className='quiz-language'>Quiz Language: <Menu languages={practiceLanguages} setLanguage={setSelectedLanguage} /></div>
      </div>
      <div className='quizzes-wrapper'>
        <Row>
          {!noQuizzesAvailable ? allQuizzesLevelsCards : 'No quizzes available for this language yet...'}
        </Row>
        <QuizModal currentQuiz={currentQuiz} currentQuizId={currentQuizId} setCurrentQuizId={setCurrentQuizId} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </div>
  )
}

export default Quizzes;
