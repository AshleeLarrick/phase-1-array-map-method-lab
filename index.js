const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  for(let i = 0; i < tutorials.length; i++) {
    const splitLine = tutorials[i].split(" ") // ['what', 'does', 'the', 'this', 'keyword', 'mean?']
    for(let firstWords = 0; firstWords < splitLine.length; firstWords++) {
      splitLine[firstWords] = splitLine[firstWords].charAt(0).toUpperCase() + splitLine[firstWords].slice(1)
    }
    tutorials[i] = splitLine.join(" ")
  }
  return tutorials
}
