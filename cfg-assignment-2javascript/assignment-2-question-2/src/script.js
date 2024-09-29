// Question 2.1
// Demonstrating unshift
let CFGDegreeStream = ['Data E','Software E','Project M','Full-Stack','Data Sci'];
CFGDegreeStream.unshift('Full-Stack','Data Sci');
console.log(CFGDegreeStream)
// Demonstrating shift
const elementRemoved = CFGDegreeStream.shift();
console.log(elementRemoved);
console.log(CFGDegreeStream);
// Demonstrating split
const openingMessage = "Read the CFG Degree Pathways Here"
const example = openingMessage.split(' ');
console.log(example);

// Question 2.2
// creating an object
const programmingLanguage = {
  languages: ['JavaScript', 'Python', 'C++', 'Java', 'Ruby'],
  popularLanguages: ['JavaScript', 'Python'],
  isPopular: function(language) {
    if (this.popularLanguages.includes(language)) {
      return `${language} is a popular programming language.`;
    } else {
      return `${language} is not among the popular programming languages.`;
    }
  }
}
