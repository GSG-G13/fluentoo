const getQuizRank = (quizLevel: number) => {
  if (quizLevel === 1) {
    return {
      text: 'Easy',
      color: '#66cc66',
    };
  } else if (quizLevel === 2) {
    return {
      text: 'Intermediate',
      color: '#ff9900',
    };
  } else if (quizLevel === 3) {
    return {
      text: 'Hard',
      color: '#ff0000',
    };
  } else if (quizLevel === 4) {
    return {
      text: 'Advanced',
      color: '#800080',
    };
  }
}



export default getQuizRank
