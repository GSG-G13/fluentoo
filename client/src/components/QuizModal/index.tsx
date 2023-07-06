import React, { useState, useEffect } from 'react';
import { Modal, Radio, Space, Button, Form } from 'antd';
import './style.modules.css';

const QuizModal = ({ questions, level, isModalOpen, setIsModalOpen }: any) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);
  console.log(level);

  const handleOk = () => {
    setIsModalOpen(false);
    setQuestionNumber(0);
    setCorrectAnswers(0);
    setShowResult(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setQuestionNumber(0);
    setCorrectAnswers(0);
    setShowResult(false);
  };

  const onQuestionAnswer = ({ answer }: { answer: string }) => {
    const { correct_answer } = questions[questionNumber];
    if (answer === correct_answer) {
      setCorrectAnswers(prevCorrectAnswers => prevCorrectAnswers + 1);
    }
    if (questionNumber === questions.length - 1) {
      setShowResult(true);
    } else {
      setQuestionNumber(prevQuestionNumber => prevQuestionNumber + 1);
    }
  };

  useEffect(() => {
    if (showResult) {
      console.log(correctAnswers);
    }
  }, [showResult]);

  return (
    <Modal title={!showResult && questions && questions[questionNumber].question} footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      {!showResult ? (
        <Form onFinish={onQuestionAnswer}>
          <Form.Item className='radio-section' name="answer">
            <Radio.Group>
              <Space direction="vertical">
                {questions && questions[questionNumber].options.map((option: string, i: number) => <Radio key={i} value={option}>{option}</Radio>)}
              </Space>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {questions && questionNumber === questions.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </Form.Item>
        </Form>
      ) : <div className={correctAnswers > questions?.length / 2 ? 'result success' : 'result fail'}>{correctAnswers}/{questions?.length}</div>}
    </Modal>
  );
};

export default QuizModal;
