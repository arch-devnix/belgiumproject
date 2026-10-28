// questions.js

/*
answer = index of the right choice (0 = first). Choices get shuffled in game.
If you guys don't understand, just count the response, 
take the number of the response that's correct and subtract 1.
*/

const questions = [
  {
    question: "In what year did Belgium become independent?",
    choices: ["1789", "1815", "1830", "1914"],
    answer: 2,
  },
  {
    question: "How many official languages does Belgium have?",
    choices: ["2", "3", "4", "5"],
    answer: 1,
  },
  {
    question: "Which of these does NOT border Belgium?",
    choices: ["France", "Germany", "Spain", "Luxembourg"],
    answer: 2,
  },
  {
    question: "Which Belgian city is the world's diamond hub?",
    choices: ["Antwerp", "Liège", "Namur", "Leuven"],
    answer: 0,
  },
  {
    question: "Who called Belgium 'one of Europe's best kept secrets'?",
    choices: ["Marco Polo", "Rick Steves", "Gordon Ramsay", "Bill Nye"],
    answer: 1,
  },
  {
    question: "Ghent, shown on our first slide, is in which province?",
    choices: ["Liège", "Limburg", "East Flanders", "Namur"],
    answer: 2,
  },
  {
    question: "How many provinces does Belgium have?",
    choices: ["5", "8", "10", "12"],
    answer: 2,
  },
  {
    question: "Which is the biggest Belgian region by population?",
    choices: ["Flanders", "Wallonia", "Brussels-Capital", "They're all equal"],
    answer: 0,
  },
  {
    question: "About how big is Belgium?",
    choices: ["3,000 km²", "30,000 km²", "300,000 km²", "3,000,000 km²"],
    answer: 1,
  },
  {
    question: "What is 'Noir Belge'?",
    choices: ["A dark beer", "A black marble", "A chocolate", "A river"],
    answer: 1,
  },
  {
    question: "Where are many Belgian tomatoes and strawberries grown?",
    choices: ["Desert farms", "Mountain terraces", "High-tech greenhouses", "Floating gardens"],
    answer: 2,
  },
  {
    question: "Which is a main Belgian crop?",
    choices: ["Sugar beets", "Coffee", "Rice", "Cocoa"],
    answer: 0,
  },
  {
    question: "What are Belgium's top exports?",
    choices: ["Rice and tea", "Coffee beans", "Cotton and wool", "Pharmaceuticals and vaccines"],
    answer: 3,
  },
  {
    question: "What is Belgium's national dish?",
    choices: ["Waterzooi", "Moules-Frites", "Stoemp", "Carbonade Flamande"],
    answer: 1,
  },
  {
    question: "How many times are Belgian fries fried?",
    choices: ["Once", "Twice", "Three times", "Never, they're baked"],
    answer: 1,
  },
  {
    question: "Which is a popular Belgian fry sauce?",
    choices: ["Ranch", "Tzatziki", "Chimichurri", "Andalouse"],
    answer: 3,
  },
  {
    question: "Carbonade Flamande is a beef stew braised in what?",
    choices: ["Red wine", "Milk", "Dark ale", "Cider"],
    answer: 2,
  },
  {
    question: "Waterzooi is a creamy stew made with chicken or what?",
    choices: ["Fish", "Lamb", "Rabbit", "Duck"],
    answer: 0,
  },
  {
    question: "What is stoemp mostly made of?",
    choices: ["Rice", "Mashed potatoes", "Pasta", "Bread"],
    answer: 1,
  },
  {
    question: "Tomate Crevette is a tomato stuffed with what?",
    choices: ["Cheese", "Tuna", "Grey shrimp", "Eggs"],
    answer: 2,
  },
  {
    question: "Which waffle is dense, with caramelized pearl sugar?",
    choices: ["Liège", "Brussels", "Ghent", "Antwerp"],
    answer: 0,
  },
  {
    question: "What fat does real Belgian chocolate use?",
    choices: ["Palm oil", "Margarine", "Vegetable oil", "Cocoa butter"],
    answer: 3,
  },
  {
    question: "When are speculoos cookies traditionally eaten?",
    choices: ["Summer", "Winter holidays", "Easter", "Halloween"],
    answer: 1,
  },
  {
    question: "Which Belgian beer label means the strongest?",
    choices: ["Enkel", "Dubbel", "Tripel", "Quadrupel"],
    answer: 3,
  },
  {
    question: "Jenever, a Belgian spirit, is flavored with what?",
    choices: ["Juniper", "Mint", "Anise", "Cherry"],
    answer: 0,
  },
  {
    question: "Until what age is school mandatory in Belgium?",
    choices: ["14", "16", "18", "21"],
    answer: 2,
  },
  {
    question: "Which of these is a top Belgian university?",
    choices: ["Oxford", "KU Leuven", "Harvard", "Sorbonne"],
    answer: 1,
  },
  {
    question: "What is Belgium's VAT rate?",
    choices: ["10%", "15%", "21%", "25%"],
    answer: 2,
  },
  {
    question: "How long is a normal Belgian work week?",
    choices: ["32 hours", "35 hours", "38 hours", "45 hours"],
    answer: 2,
  },
  {
    question: "How is Belgium's weather usually described?",
    choices: ["Hot and dry", "Grey and rainy", "Snowy all year", "Tropical"],
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