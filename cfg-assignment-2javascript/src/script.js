console.log("Coffee Shop Tycoon is running")

//Asks for input from user
const willUserHelp = prompt("Hi! Welcome to my coffee shop. I'm Lora and I am so busy at the moment that I really need a hand sorting orders. Can you help me? (yes/no)") ;

let messageDiv = document.getElementById('introMessage');

// User input dictates opening message
if (willUserHelp == "no") {
  messageDiv.textContent = "No worries, I understand. I best get on with things then, Goodbye!"
} else if (willUserHelp == "yes") {
  messageDiv.textContent = "Oh thank goodness! Let's get started. I warn you, it can get hectic! To prepare, have a go at the training below. Good luck!"
} else {
  messageDiv.textContent = "I'm not sure what you mean. Please answer 'yes' or 'no'. Aghh I think something is burning! Gotta go!";
  alert("You did not make sense, please verify you are ok");
}
// Data needed to play training levels
const gameDescription1 = "Each photo displays the constitutents of drinks we sell. Match the photo to the drink!"
// Data for game 1
const coffeeOptions = ['Espresso','Americano','Cappuccino','Latte','Flat White','Hot Chocolate']
const coffeeImages = [
  { src: 'https://github.com/rehanapatel/CFG-Degree-FullStack/blob/main/images_Assignment2/AmericanoImage.png?raw=true', correctOption: 'Americano' },
  { src: 'https://github.com/rehanapatel/CFG-Degree-FullStack/blob/main/images_Assignment2/CapuccinoImage.jpg?raw=true', correctOption: 'Cappuccino' },
  { src: 'https://github.com/rehanapatel/CFG-Degree-FullStack/blob/main/images_Assignment2/EspressoImage.jpg?raw=true', correctOption: 'Espresso' },
  { src: 'https://github.com/rehanapatel/CFG-Degree-FullStack/blob/main/images_Assignment2/HotChocImage.jpg?raw=true', correctOption: 'Hot Chocolate' },
  { src: 'https://github.com/rehanapatel/CFG-Degree-FullStack/blob/main/images_Assignment2/FlatWhiteImage.jpg?raw=true', correctOption: 'Flat White' },
  { src: 'https://github.com/rehanapatel/CFG-Degree-FullStack/blob/main/images_Assignment2/LatteImage.jpg?raw=true', correctOption: 'Latte' }
]

// Data for game 2
const gameDescription2 = "Try and remember which customer ordered which before the images disappear!"

const orderOptions = ['2 hot chocolates & 1 Bakewell slice',
                '2 chocolate cakes, 1 croissant, & 3 lattes',
                '3 lattes, 1 vanilla latte, & 3 croissants',
                '2 flat whites, 1 americano, & 1 muffin',
                '3 americanos, 1 espresso, & 3 muffins',
                '2 hot chocolates, 1 oat flat white, & 1 muffin'
               ]

const orderImages = [
  { src:"https://github.com/rehanapatel/CFG-Degree-FullStack/blob/main/images_Assignment2/Order1.jpg?raw=true", correctOption: '2 flat whites, 1 americano, & 1 muffin'},
   { src:"https://github.com/rehanapatel/CFG-Degree-FullStack/blob/main/images_Assignment2/Order2.jpg?raw=true", correctOption: '3 americanos, 1 espresso, & 3 muffins'},
  { src:"https://github.com/rehanapatel/CFG-Degree-FullStack/blob/main/images_Assignment2/Order3.jpg?raw=true", correctOption: '2 hot chocolates, 1 oat flat white, & 1 muffin'},
   { src:"https://github.com/rehanapatel/CFG-Degree-FullStack/blob/main/images_Assignment2/Order4.jpg?raw=true", correctOption: '2 hot chocolates & 1 Bakewell slice'},
  { src:"https://github.com/rehanapatel/CFG-Degree-FullStack/blob/main/images_Assignment2/Order5.jpg?raw=true", correctOption: '2 chocolate cakes, 1 croissant, & 3 lattes'},
   { src:"https://github.com/rehanapatel/CFG-Degree-FullStack/blob/main/images_Assignment2/Order6.jpg?raw=true", correctOption: '3 lattes, 1 vanilla latte, & 3 croissants'}
]

// Data for game3
const gameDescription3 = "Do you know your coffee trivia? Have a go below!"
const questionOptions1 = ['Colombia', 'Brazil', 'Vietnam', 'Ethiopia']
const questionOptions2 = ['1','1.5','2','3']
const questionOptions3 = ['Kona coffee','Espresso luwak','Mocha coffee','Civet coffee']
const questionOptions4 = ['Milan','Rome','Florence','Venice']
const questionOptions5 = ['Cream','Froth','Foam','Crema']
const questionOptions6 = ['Flat White','Macchiato','Cappuccino','Latte']

const listOfOptions = [questionOptions1, questionOptions2, questionOptions3, questionOptions4, questionOptions5, questionOptions6]

const questionImages = [
  { src:"https://github.com/rehanapatel/CFG-Degree-FullStack/blob/main/images_Assignment2/question1.jpg?raw=true", correctOption: 'Brazil'},
   { src:"https://github.com/rehanapatel/CFG-Degree-FullStack/blob/main/images_Assignment2/question2.jpg?raw=true", correctOption: '2'},
  { src:"https://github.com/rehanapatel/CFG-Degree-FullStack/blob/main/images_Assignment2/question3.jpg?raw=true", correctOption: 'Civet coffee'},
   { src:"https://github.com/rehanapatel/CFG-Degree-FullStack/blob/main/images_Assignment2/question4.jpg?raw=true", correctOption: 'Milan'},
  { src:"https://github.com/rehanapatel/CFG-Degree-FullStack/blob/main/images_Assignment2/question5.jpg?raw=true", correctOption: 'Crema'},
   { src:"https://github.com/rehanapatel/CFG-Degree-FullStack/blob/main/images_Assignment2/question6.jpg?raw=true", correctOption: 'Cappuccino'}
]
// Functions to set up each game & enable reusability of code 
//generatesQuestionsWithOptions Function
function generateQuestionsWithOptions(Questions,Options,identicalList=true){
  
  // Fetches element with the ID 'content' to manipulate
  let content = document.getElementById('content');
  // Making sure content is empty
  content.innerHTML ='';
  
  // Iterates through 'Questions' to set up images
  for (let i = 0; i < Questions.length; i++) {
    const image = Questions[i];

    // For each question image, creates container, adds image to container
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const img = document.createElement('img');
    img.src = image.src;
    img.classList.add('question-image');
    // Append Child creates it dynamically on page
    imageContainer.appendChild(img);

    // iterates through optionList and creates an unordered list, creates list item for each option
    const optionList = document.createElement('ul');

    // if we are using identical lists for each question, this code is executed
    if (identicalList){
      for (let j = 0; j < Options.length; j++) {
        let option = Options[j];
        let optionItem = document.createElement('li');
        optionItem.textContent = option;

        // uses correct & wrong class to indicate what is right and wrong
        optionItem.addEventListener('click', function() {
          if (option === image.correctOption) {
            optionItem.classList.add('correct');
          } else {
            optionItem.classList.add('wrong');
          }
          disableOtherOptions(optionItem);
        });

        optionList.appendChild(optionItem);
    }
   // If not, like in game 3, this code is executed
   } else {   
    let optionSet = Options[i];  
    for (let k = 0; k < optionSet.length; k++) {
      let nestedOption = optionSet[k]; 
      let optionItem = document.createElement('li');
      optionItem.textContent = nestedOption;
    
      optionItem.addEventListener('click', function() {
        if (nestedOption === image.correctOption) { 
          optionItem.classList.add('correct');
        } else {
          optionItem.classList.add('wrong');
        }
        disableOtherOptions(optionItem); 
      });
    
      optionList.appendChild(optionItem); // Append the option to the list
    }
  }

    imageContainer.appendChild(optionList);
    content.appendChild(imageContainer);
  }
};
// Function to disable options after selected
function disableOtherOptions(selectedOption) {
  const siblingOptions = selectedOption.parentNode.childNodes;
  siblingOptions.forEach(option => {
   option.style.pointerEvents = 'none';
    });
}

// Enables 'dynamic' buttons - content changes when clicked
// Event listeners
// Uses anonymous functions to point to named function
document.getElementById('lvl1Btn').addEventListener('click', function() {
  generateQuestionsWithOptions(coffeeImages,coffeeOptions);
  console.log("Running Game 1");
  let gameMessage = document.getElementById('gameIntro');
  gameMessage.textContent = gameDescription1
});

document.getElementById('lvl2Btn').addEventListener('click', function() {
  generateQuestionsWithOptions(orderImages,orderOptions);
  console.log("Running Game 2");
  let gameMessage = document.getElementById('gameIntro');
  gameMessage.textContent = gameDescription2;
  // Set a timeout to hide all images after 15 seconds
  setTimeout(function() {
  let images = document.querySelectorAll('.question-image');
  images.forEach(image => {
  image.style.visibility = 'hidden';
   });
 }, 15000); 
});

document.getElementById('lvl3Btn').addEventListener('click', function() {
  generateQuestionsWithOptions(questionImages,listOfOptions, false);
  console.log("Running Game 3");
  let gameMessage = document.getElementById('gameIntro');
  gameMessage.textContent = gameDescription3;
});
