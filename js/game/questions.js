// questions.js

/*
answer = index of the right choice (0 = first). Choices get shuffled in game.
If you guys don't understand, just count the response, 
take the number of the response that's correct and subtract 1.
*/

const questions = [
  {
    question: "According to travel writer Rick Steves, what is Belgium?",
    choices: ["One of Europe's best kept secrets", "The capital of Western Europe", "A hidden gem of the Alps", "The medieval heart of the world"],
    answer: 0,
  },
  {
    question: "Ghent, shown on our first slide, is located in which region of Belgium?",
    choices: ["Wallonia", "Brussels-Capital", "East Flanders", "Antwerp"],
    answer: 2,
  },
  {
    question: "How many official languages does Belgium have?",
    choices: ["2", "3", "4", "5"],
    answer: 1,
  },
  {
    question: "How many provinces does Belgium have?",
    choices: ["5", "8", "10", "12"],
    answer: 2,
  },
  {
    question: "About how many people live in Belgium?",
    choices: ["5.5 million", "11.87 million", "20.5 million", "35 million"],
    answer: 1,
  },
  {
    question: "About how large is Belgium's land area?",
    choices: ["10,500 km²", "30,689 km²", "85,000 km²", "150,000 km²"],
    answer: 1,
  },
  {
    question: "Which of Belgium's three regions has the largest population?",
    choices: ["Flanders", "Wallonia", "Brussels-Capital", "They are all equal"],
    answer: 0,
  },
  {
    question: "Belgium is a top 10 agricultural exporter in which economic zone?",
    choices: ["The Americas", "Asia", "The European Union (EU)", "Worldwide"],
    answer: 2,
  },
  {
    question: "What is Belgium's single biggest export?",
    choices: ["Diamonds", "Chocolate and beer", "Pharmaceuticals and vaccines", "Frozen fries"],
    answer: 2,
  },
  {
    question: "Which Belgian city is known as the world capital of diamond trading?",
    choices: ["Brussels", "Antwerp", "Ghent", "Bruges"],
    answer: 1,
  },
  {
    question: "What is the average work week length mentioned in our presentation?",
    choices: ["35 hours", "38 hours", "40 hours", "45 hours"],
    answer: 1,
  },
  {
    question: "Up to what age is school mandatory in Belgium?",
    choices: ["Age 14", "Age 16", "Age 18", "Not mandatory"],
    answer: 2,
  },
  {
    question: "How are Belgian fries (frites) traditionally prepared?",
    choices: ["Baked in an oven", "Fried once in oil", "Fried twice in beef tallow", "Boiled then fried"],
    answer: 2,
  },
  {
    question: "Which popular fry sauces are highlighted in our culture slide?",
    choices: ["Ketchup and mustard", "Ranch and mayo", "Andalouse and samurai", "Tartar and garlic"],
    answer: 2,
  },
  {
    question: "What makes Liège waffles distinct from Brussels waffles?",
    choices: ["They are rectangular and light", "They are dense with caramelized pearl sugar", "They are covered in fruit", "They are served frozen"],
    answer: 1,
  },
  {
    question: "What does Belgian law require for true Belgian chocolate?",
    choices: ["At least 50% cocoa", "100% cocoa butter with no cheap vegetable oils", "Organic milk only", "No added sugar"],
    answer: 1,
  },
  {
    question: "Which global music artists are highlighted on our culture slide?",
    choices: ["Daft Punk and David Guetta", "Stromae and Angèle", "Ed Sheeran and Adele", "ABBA and Avicii"],
    answer: 1,
  },
  {
    question: "In what year did the Treaty of Verdun split the Carolingian Empire?",
    choices: ["750", "843", "1066", "1492"],
    answer: 1,
  },
  {
    question: "In what year did Belgium declare independence from the Netherlands?",
    choices: ["1789", "1815", "1830", "1914"],
    answer: 2,
  },
  {
    question: "Who became Belgium's first king in 1831?",
    choices: ["King Philippe", "Leopold I", "King Albert", "William I"],
    answer: 1,
  },
  {
    question: "What date is celebrated every year as Belgium's National Day?",
    choices: ["July 21st", "August 15th", "November 11th", "January 1st"],
    answer: 0,
  },
  {
    question: "In what year did Belgium become a federal state of three regions?",
    choices: ["1945", "1975", "1993", "2004"],
    answer: 2,
  },
  {
    question: "What type of government does Belgium run under today?",
    choices: ["Absolute Monarchy", "Constitutional Monarchy", "Direct Democracy", "Military Dictatorship"],
    answer: 1,
  },
  {
    question: "What is Belgium's national motto?",
    choices: ["Liberty, Equality, Fraternity", "Unity makes strength", "In God we trust", "Strength through peace"],
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