const englishQuizzes = [
  {
    language: 'english',
    level: 1,
  },
  {
    language: 'english',
    level: 1,
  },
  {
    language: 'english',
    level: 2,
  },
  {
    language: 'english',
    level: 2,
  },
  {
    language: 'english',
    level: 3,
  },
  {
    language: 'english',
    level: 3,
  },
  {
    language: 'english',
    level: 4,
  },
  {
    language: 'english',
    level: 4,
  },
];

const arabicQuizzes = [
  {
    language: 'arabic',
    level: 1,
  },
  {
    language: 'arabic',
    level: 2,
  },
  {
    language: 'arabic',
    level: 3,
  },
];

module.exports = {
  QUIZZES: [...englishQuizzes, ...arabicQuizzes],
};
