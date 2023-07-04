import React, { useState } from 'react';
import { Modal, Radio, Space, Button, Form } from 'antd';

const QuizModal = ({ questions, level, isModalOpen, setIsModalOpen }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onQuestionAnswer = ({ answer }) => {
    const { correct_answer } = questions[questionNumber];

    if (questionNumber === (questions.length - 1)) {
      console.log('done');
    } else {
      if (answer === correct_answer) {
        setCorrectAnswers(prevCorrectAnswers => prevCorrectAnswers + 1);
      }
      setQuestionNumber(prevQuestionNumber => prevQuestionNumber + 1);
    }
  }

  return (
    <Modal title={questions && questions[questionNumber].question} footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form onFinish={onQuestionAnswer}>
        <Form.Item name="answer">
          <Radio.Group>
            <Space direction="vertical">
              {questions && questions[questionNumber].options.map((option, i) => <Radio key={i} value={option}>{option}</Radio>)}
            </Space>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {questions && questionNumber === (questions.length - 1) ? 'Submit' : 'Next'}
          </Button>
        </Form.Item>
      </Form>
    </Modal>

  )
}

export default QuizModal