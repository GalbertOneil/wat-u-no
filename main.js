let score = 0;

let history = [
    {
        q:{
        question:'Who was the first president of the United States.?',
        answers: ['George W. Bush', 'Abraham Lincoln', 'Thomas Jefferson'],
        correctAnswer:'Abraham Lincoln'
        }
    },
    {
        q:{
        question:'How many states the United States has.?',
        answers:[51, 54, 50],
        correctAnswer:50,
        }
    },
    {
        q:{
        question:'Which event to we celebrate on July 4th?',
        answers:['The signing of the Declaration of the Constitution', 'Ratification of the Constitution', 'The crossing of the Delaware River'],
        correctAnswer:'The signing of the Declaration of the Constitution'
        }
    },
    {
        q:{
        question:'Which famous traitor defected from the Continental Army to help the British in 1780?',
        answers:['Edward Shippen', 'Benedict Arnold', 'Joseph Reed'],
        correctAnswer:'Benedict Arnold'
         }
    },
    {
        q:{
        question:'Who is credited for the original American flag design?',
        answers:['George Washington', 'Abigail Adams', 'Betsy Rose'],
        correctAnswer:'Betsy Rose',
        }
    }, 
]
let art = [
    {
        q:{
        question:'What is the artist best known for a painting of his mother?',
        answers:['Francisco Goya', 'Johannes Vermeer', 'James Abbott Mcneil Whistler'],
        correctAnswer:'James Abbott Mcneil Whistler',
         }
    },
    {
        q:{
        question:'Who was the court sculptor of Alexander the Great?',
        answers:['Vitruvius', 'Apelles', 'Lisippus'],
        correctAnswer:'isippus',
        }
    },
    {
        q:{
        question:'Who painted the Mona Lisa?',
        answers:['Jean Michel Basquiat', 'Leonardo da Vinci', 'Vincent van Gogh'],
        correctAnswer:'Leonardo da Vinci',
         }
    },
    {
        q:{
        question:'What year Pablo Picasso was born?',
        answers:[1901, 1881, 1895],
        correctAnswer:1881,
        }
    },
    {
        q:{
        question:'Who wrote the 9th Symphony?',
        answers:['Wolfgang Amadeus', 'Frederic Chopin', 'Ludwig van Beethoven'],
        correctAnswer:'Ludwig van Beethoven',
        }
    },
]
let music = [
    {
        q:{
        question:'What artist won Album of the Year on three different occasions in the first 60 years of Grammy history. One is Frank Sinatra. Who is the other?',
        answers:['Marvin Gaye', 'Stevie Wonder','Tony Bennett'],
        correctAnswer:'Stevie Wonder',
        }
    },
    {
        q:{
        question:'Which group or artist holds the distinction of starring in the first music video ever aired on MTV?',
        answers:['The Buggles - Video kill The Radio Star', 'Michael Jackson  - Thriller', 'Queen - Under Pressure'],
        correctAnswer:'The Buggles - Video kill The Radio Star'
         }   
    },
    {
        q:{
        question:`Which classic 1980's band are responsible for the hit "Sweet Dreams (Are Made of This)"?`,
        answers:['The Eurythmics', 'Blondie', 'The Bangles'],
        correctAnswer:'The Eurythmics',
        }   
    },
    {
        q:{
        question:`As of the first 35 years of the existence of the Rock and Roll Hall of Fame (1983 - 2018), who is the only artist or band to have been inducted on three separate occasions?`,
        answers:['Eric Clapton', 'Van Halen', 'The Eagles'],
        correctAnswer:'Eric Clapton',
          }
    },
    {
        q:{
        question:'In 2008, which artist broke the record for the youngest ever to win a Grammy for Album of the Year?',
        answers:['Pharrell Williams', 'Taylor Swift', 'Bruno Mars'],
        correctAnswer:'Taylor Swift',
        }
    },
]
let javaScript = [
    {
        q:{
        question:'Javascript files has an extension of?',
        answers:['.javascript', '.js', '.html'],
        correctAnswer:'.js',
        }
    },
    {
        q:{
        question:`var numbers = [1, 2, 3] is an example of?`,
        answers:['array', 'Object', 'Method'],
        correctAnswer:'Array',
        }
    },
    {
        q:{
        question:`var i; for (i = 0; i < 2; i++) {   console.log("i is now equal to " + i);?`,
        answers:['Function', 'For Loop', 'While Loop'],
        correctAnswer:'For Loop',
        }
    },
    {
        q:{
        question:'var = myName is an example of a?',
        answers:['Variable', 'String', 'Object'],
        correctAnswer:'Variable',
        }
    },
    {
        q:{
        question:`Inside which HTML element do we put the JavaScript?`,
        answers:['<javascript>', '<js>', '<script>'],
        correctAnswer:'<script>',
        }
    },
];

let randomNum;

const questionForm = document.querySelector('#questionForm');
const createInputs = () => {
    for (let i=0; i<history.length; i+=1) {
        
        const qFormInput = document.createElement('input');
        qFormInput.id = `answer${i+1}`;
        qFormInput.type = 'radio';
        qFormInput.innerHTML = `${history[i].answers}`
        console.log(history[i]);

        questionForm.appendChild(qFormInput)
    }
}
// createInputs();

        // const qFormInput1 = document.createElement('input');
        // qFormInput1.id = 'answer1';
        // qFormInput1.type = 'radio';
        // qFormInput1.innerHTML = 'Answer1';

        // const qFormInput2 = document.createElement('input');
        // qFormInput2.id = 'answer2';
        // qFormInput2.type = 'radio';
        // qFormInput2.innerHTML = 'Answer2';

        // const qFormInput3 = document.createElement('input');
        // qFormInput3.id = 'answer3';
        // qFormInput3.type = 'radio';
        // qFormInput3.innerHTML = 'Answer3';

        // questionForm.append(qFormInput1);
        // questionForm.append(qFormInput2);
        // questionForm.append(qFormInput3);
// }
// createInputs();

const subject = (topic) => {
    randomNum = Math.floor(Math.random() * 5);
    // console.log('check', randomNum);
    

    let pregunta = document.querySelector('#pregunta');
    pregunta.innerHTML = topic[randomNum].q.question;

    for (let i=0; i<3; i+=1) {
        
        const qFormInput = document.createElement('input');
        qFormInput.id = `answer${i+1}`;
        qFormInput.type = 'radio';
        qFormInput.name = 'choice';
        qFormInput.value = topic[randomNum].q.answers[i];
        // qFormInput.innerHTML = `${topic[randomNum].q.answers[i]}`
        console.log(topic[randomNum].q.answers[i]);
        // qFormInput.value = `${topic[randomNum].q.answers[0]}`
        qFormInput.innerHTML = `<label>Tara</label>`
        

        questionForm.appendChild(qFormInput)
    }

    // let pregunta = document.querySelector('#pregunta');
    // let answer1 = document.querySelector('#answer1');
    // let answer2 = document.querySelector('#answer2');
    // let answer3 = document.querySelector('#answer3');

    // pregunta.innerHTML = topic[randomNum].q.question;
    // answer1.innerHTML = topic[randomNum].q.answers[0];
    // answer2.innerHTML = topic[randomNum].q.answers[1];
    // answer3.innerHTML = topic[randomNum].q.answers[2];
    
}


subject(history);
