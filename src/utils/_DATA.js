let users = {
  bulbasaur: {
    id: "bulbasaur",
    name: "Bulbasaur",
    avatarURL: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  },
  charmander: {
    id: "charmander",
    name: "Charmander",
    avatarURL: "https://img.pokemondb.net/artwork/charmander.jpg",
    answers: {
      vthrdm985a262al8qx3do: "optionOne",
      xj352vofupe1dqz9emx13r: "optionTwo",
    },
    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
  },
  squirtle: {
    id: "squirtle",
    name: "Squirtle",
    avatarURL: "https://img.pokemondb.net/artwork/squirtle.jpg",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  },
  meowth: {
    id: "meowth",
    name: "Meowth",
    avatarURL: "https://img.pokemondb.net/artwork/meowth.jpg",
    answers: {},
    questions: [],
  },
  psyduck: {
    id: "psyduck",
    name: "Psyduck",
    avatarURL: "https://img.pokemondb.net/artwork/psyduck.jpg",
    answers: {},
    questions: [],
  },
  pikachu: {
    id: "pikachu",
    name: "Pikachu",
    avatarURL: "https://img.pokemondb.net/artwork/pikachu.jpg",
    answers: {},
    questions: [],
  },
  caterpie: {
    id: "caterpie",
    name: "Caterpie",
    avatarURL: "https://img.pokemondb.net/artwork/caterpie.jpg",
    answers: {},
    questions: [],
  },
  rattata: {
    id: "rattata",
    name: "Rattata",
    avatarURL: "https://img.pokemondb.net/artwork/rattata.jpg",
    answers: {},
    questions: [],
  },
};

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "bulbasaur",
    timestamp: 1467166872634,
    optionOne: {
      votes: ["bulbasaur"],
      text: "be president of China",
    },
    optionTwo: {
      votes: [],
      text: "be president of USA",
    },
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: "6ni6ok3ym7mf1p33lnez",
    author: "squirtle",
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: "be Ronaldo",
    },
    optionTwo: {
      votes: ["squirtle", "bulbasaur"],
      text: "Messi",
    },
  },
  am8ehyc8byjqgar0jgpub9: {
    id: "am8ehyc8byjqgar0jgpub9",
    author: "bulbasaur",
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: "be able to talk with the animals",
    },
    optionTwo: {
      votes: ["bulbasaur"],
      text: "speak all foreign languages",
    },
  },
  loxhs1bqm25b708cmbf3g: {
    id: "loxhs1bqm25b708cmbf3g",
    author: "bulbasaur",
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: "be a front-end developer",
    },
    optionTwo: {
      votes: ["bulbasaur"],
      text: "be a back-end developer",
    },
  },
  vthrdm985a262al8qx3do: {
    id: "vthrdm985a262al8qx3do",
    author: "charmander",
    timestamp: 1489579767190,
    optionOne: {
      votes: ["charmander"],
      text: "find $50 yourself",
    },
    optionTwo: {
      votes: ["squirtle"],
      text: "have your best friend find $500",
    },
  },
  xj352vofupe1dqz9emx13r: {
    id: "xj352vofupe1dqz9emx13r",
    author: "squirtle",
    timestamp: 1493579767190,
    optionOne: {
      votes: ["squirtle"],
      text: "write JavaScript",
    },
    optionTwo: {
      votes: ["charmander"],
      text: "write Java",
    },
  },
};

function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000);
  });
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...questions }), 1000);
  });
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    },
  };
}

export function _saveQuestion(question) {
  return new Promise((res, rej) => {
    const authUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion,
      };

      users = {
        ...users,
        [authUser]: {
          ...users[authUser],
          questions: users[authUser].questions.concat([formattedQuestion.id]),
        },
      };

      res(formattedQuestion);
    }, 1000);
  });
}

export function _saveQuestionAnswer({ authUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authUser]: {
          ...users[authUser],
          answers: {
            ...users[authUser].answers,
            [qid]: answer,
          },
        },
      };

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authUser]),
          },
        },
      };

      res();
    }, 500);
  });
}
