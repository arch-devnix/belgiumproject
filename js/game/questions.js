// questions.js
// answer = index of the right choice (0 = first). Choices get shuffled in game.
// Keep 16+ questions, and keep them short (6 seconds to answer).

const questions = [
  {
    question: "What is the capital of Belgium?",
    choices: ["Antwerp", "Brussels", "Bruges", "Ghent"],
    answer: 1,
  },
  {
    question: "How many official languages does Belgium have?",
    choices: ["2", "3", "4", "5"],
    answer: 1,
  },
  {
    question: "In what year did Belgium become independent?",
    choices: ["1789", "1815", "1830", "1914"],
    answer: 2,
  },
  {
    question: "Which Belgian city is the world's diamond hub?",
    choices: ["Antwerp", "Liège", "Namur", "Leuven"],
    answer: 0,
  },
  {
    question: "Which sea lies along Belgium's coast?",
    choices: ["Baltic Sea", "Mediterranean Sea", "North Sea", "Black Sea"],
    answer: 2,
  },
  {
    question: "Which of these does NOT border Belgium?",
    choices: ["France", "Germany", "Spain", "Luxembourg"],
    answer: 2,
  },
  {
    question: "How many provinces does Belgium have?",
    choices: ["5", "8", "10", "12"],
    answer: 2,
  },
  {
    question: "Which currency does Belgium use?",
    choices: ["Euro", "Franc", "Pound", "Krone"],
    answer: 0,
  },
  {
    question: "Which city is nicknamed the 'Venice of the North' for its canals?",
    choices: ["Mons", "Bruges", "Charleroi", "Hasselt"],
    answer: 1,
  },
  {
    question: "Which alliance has its headquarters in Brussels?",
    choices: ["NATO", "ASEAN", "The African Union", "OPEC"],
    answer: 0,
  },
  {
    question: "What type of government does Belgium have?",
    choices: ["Absolute monarchy", "Constitutional monarchy", "Military junta", "One-party republic"],
    answer: 1,
  },
  {
    question: "Which Belgian city is famous for its dense, sugary waffle?",
    choices: ["Liège", "Ostend", "Tournai", "Ypres"],
    answer: 0,
  },
  {
    question: "How many times are traditional Belgian fries fried?",
    choices: ["Once", "Twice", "Three times", "Never, they're baked"],
    answer: 1,
  },
  {
    question: "Which chocolate treat did Jean Neuhaus invent in Brussels in 1912?",
    choices: ["The truffle", "The praline", "The chocolate bar", "The bonbon cup"],
    answer: 1,
  },
  {
    question: "The Manneken Pis statue is in which city?",
    choices: ["Brussels", "Antwerp", "Ghent", "Namur"],
    answer: 0,
  },
  {
    question: "The Atomium was built for which event?",
    choices: ["The 1958 World's Fair", "The 1920 Olympics", "A royal wedding", "The 1830 revolution"],
    answer: 0,
  },
  {
    question: "Which language is mostly spoken in Flanders, in northern Belgium?",
    choices: ["French", "German", "Dutch", "Italian"],
    answer: 2,
  },
  {
    question: "Ghent, shown on our first slide, is in which province?",
    choices: ["East Flanders", "Liège", "Limburg", "Namur"],
    answer: 0,
  },
  {
    question: "Who called Belgium 'one of Europe's best kept secrets'?",
    choices: ["Rick Steves", "Marco Polo", "Gordon Ramsay", "Bill Nye"],
    answer: 0,
  },
  {
    question: "Which famous comic hero was created by Belgian artist Hergé?",
    choices: ["Asterix", "Tintin", "Superman", "Garfield"],
    answer: 1,
  },
  {
    question: "Which blue cartoon characters were created by the Belgian artist Peyo?",
    choices: ["The Smurfs", "The Minions", "The Snorks", "The Moomins"],
    answer: 0,
  },
  {
    question: "In which region is Belgium's highest point, the Signal de Botrange?",
    choices: ["Flanders", "Wallonia", "Brussels-Capital", "The coast"],
    answer: 1,
  },
];

for (let i = 0; i < questions.length; i++) {
  const q = questions[i];
  if (q.answer < 0 || q.answer >= q.choices.length) {
    console.warn("Question " + (i + 1) + " has an answer out of range: " + q.question);
  }
}
if (questions.length < 16) {
  console.warn("Only " + questions.length + " questions: later players may see repeats.");
}