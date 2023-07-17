import React, { useState, useEffect } from 'react';
import { Modal, Radio, Space, Button, Form } from 'antd';
import { QuizModalPropsType } from '../../utils';
import './style.modules.css';
import axios from 'axios';

const QuizModal = ({ currentQuiz, currentQuizId, setCurrentQuizId, isModalOpen, setIsModalOpen }: QuizModalPropsType) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [examResult, setExamResult] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleOk = () => {
    setQuestionNumber(0);
    setAnswers([]);
    setShowResult(false);
    setCorrectAnswers(0);
    setExamResult('');
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setQuestionNumber(0);
    setAnswers([]);
    setShowResult(false);
    setCorrectAnswers(0);
    setExamResult('');
    setIsModalOpen(false);
  };

  const onQuestionAnswer = ({ answer }: { answer: string }) => {
    if (currentQuiz) {
      setAnswers(prevAnswers => [...prevAnswers, answer])

      if (questionNumber === currentQuiz.questions.length - 1) {
        setShowResult(true);
      } else {
        setQuestionNumber(prevQuestionNumber => prevQuestionNumber + 1);
        setIsChecked(false);
      }
    }
  };

  useEffect(() => {
    if (showResult) {
      (async function () {
        const { data } = await axios.patch(`/api/quiz/level/${currentQuiz?.language}`, {
          quizId: currentQuiz?.id,
          quizAnswers: answers,
        });
        setCorrectAnswers(data.data.correctAnswers);
        setExamResult(data.data.examResult);
        if (data.data.examResult === 'success') {
          setCurrentQuizId(currentQuizId + 1);
        }
      })()
    }
  }, [showResult]);

  return (
    <Modal
      title={!showResult && currentQuiz?.questions[questionNumber].questionText}
      footer={null}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {!showResult ? (
        <Form onFinish={onQuestionAnswer}>
          <Form.Item className='radio-section' name="answer">
            <Radio.Group>
              <Space direction="vertical">
                {
                  currentQuiz?.questions && currentQuiz?.questions[questionNumber].options
                    .map((option: string, i: number) => (
                      <Radio
                        key={i}
                        value={option}
                        onChange={() => setIsChecked(true)}
                      >
                        {option}
                      </Radio>
                    ))
                }
              </Space>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Button disabled={!isChecked} type="primary" htmlType="submit">
              {currentQuiz?.questions && questionNumber === currentQuiz?.questions.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <div className={`result ${examResult}`}>
          <div>{correctAnswers}/{currentQuiz?.questions.length}</div>
          <p>{examResult === 'success' ? 'Congratulations! You passed!' : 'Unsuccessful. Keep pushing forward!'}</p>
        </div>
      )
      }
    </Modal >
  );
};

export default QuizModal;
