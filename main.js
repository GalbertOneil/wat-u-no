let score = 0;
let winScore = 5;


let trivia = [
    {
        q:{
        question:'Who was the first president of the United States.?',
        answers: ['George Washington', 'Abraham Lincoln', 'Thomas Jefferson'],
        correctAnswer:'George Washington'
        }
    },
    {
        q:{
        question:'How many states the United States has.?',
        answers:['51', '54', '50'],
        correctAnswer:'50'
        }
    },
    {
        q:{
        question:'Which event to we celebrate on July 4th?',
        answers:['The signing of the Declaration of the Constitution', 'Ratification of the Constitution', 'The crossing of the Delaware River'],
        correctAnswer: 'The signing of the Declaration of the Constitution'
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
        correctAnswer:'Betsy Rose'
        }
    }, 

    {
        q:{
        question:'What is the artist best known for a painting of his mother?',
        answers:['Francisco Goya', 'Johannes Vermeer', 'James Abbott Mcneil Whistler'],
        correctAnswer:'James Abbott Mcneil Whistler'
         }
    },
    {
        q:{
        question:'Who was the court sculptor of Alexander the Great?',
        answers:['Vitruvius', 'Apelles', 'Lisippus'],
        correctAnswer:'Lisippus'
        }
    },
    {
        q:{
        question:'Who painted the Mona Lisa?',
        answers:['Jean Michel Basquiat', 'Leonardo da Vinci', 'Vincent van Gogh'],
        correctAnswer:'Leonardo da Vinci'
         }
    },
    {
        q:{
        question:'What year Pablo Picasso was born?',
        answers:['1901', '1881', '1895'],
        correctAnswer:'1881'
        }
    },
    {
        q:{
        question:'Who wrote the 9th Symphony?',
        answers:['Wolfgang Amadeus', 'Frederic Chopin', 'Ludwig van Beethoven'],
        correctAnswer:'Ludwig van Beethoven'
        }
    },

    {
        q:{
        question:'What artist won Album of the Year on three different occasions in the first 60 years of Grammy history. One is Frank Sinatra. Who is the other?',
        answers:['Marvin Gaye', 'Stevie Wonder','Tony Bennett'],
        correctAnswer:'Stevie Wonder'
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
        answers:['The Eurythmics', 'Blondie', 'Bangles'],
        correctAnswer:'The Eurythmics'
        }   
    },
    {
        q:{
        question:`As of the first 35 years of the existence of the Rock and Roll Hall of Fame (1983 - 2018), who is the only artist or band to have been inducted on three separate occasions?`,
        answers:['Eric Clapton', 'Van Halen', 'The Eagles'],
        correctAnswer:'Eric Clapton'
          }
    },
    {
        q:{
        question:'In 2008, which artist broke the record for the youngest ever to win a Grammy for Album of the Year?',
        answers:['Pharrell Williams', 'Taylor Swift', 'Bruno Mars'],
        correctAnswer:'Taylor Swift'
        }
    },
    {
        q:{
        question:'Javascript files has an extension of?',
        answers:['javascript', 'js', 'html'],
        correctAnswer:'js'
        }
    },
    {
        q:{
        question:`var numbers = [1, 2, 3] is an example of?`,
        answers:['Array', 'Object', 'Method'],
        correctAnswer:'Array'
        }
    },
    {
        q:{
        question:`var i; for (i = 0; i < 2; i++) {   console.log("i is now equal to " + i);?`,
        answers:['Function', 'For Loop', 'While Loop'],
        correctAnswer:'For Loop'
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
        answers:['javascript', 'js', 'script'],
        correctAnswer:'script',
        }
    },
]

 
 



const questionForm = document.querySelector('#questionForm');


let removeQuestion = function(){
    let questionBox = document.querySelector('#questionBox');
    
        while(questionBox.firstElementChild){
            questionBox.removeChild(questionBox.firstElementChild)
        }
       
}
let winOrLose = function(){
    if(score === 5){
        alert('YOU WIN')
    } else if(score === -3){
        alert('YOU LOSE SUCKER')
    }
}


const subject = topic => {
    
    let randomNum = Math.floor(Math.random() * 20);

    const questionBox = document.querySelector('#questionBox')
    
    const form = document.createElement('form')
    form.id = 'question-form'

    let correctAnswer = topic[randomNum].q.correctAnswer

    const h3 = document.createElement('h3');
    h3.id = 'question';
    questionBox.appendChild(h3);
    let question = document.querySelector('#question');
    question.innerText = topic[randomNum].q.question

    for (let i=0; i<3; i+=1) {
        const answers = document.createElement('div');
        let answerValues = `${topic[randomNum].q.answers[i]}`;
             
        answers.innerHTML = `<input id=answer${i+1} type="radio" name="choice" value=${answerValues}>${topic[randomNum].q.answers[i]}</input>`
        
        form.appendChild(answers)
    }
    
    const submitButton = document.createElement('input')
    submitButton.type = 'button'
    submitButton.name = 'submit'
    submitButton.value = 'submit'
    submitButton.className = 'submitButton'
    form.appendChild(submitButton)
    questionBox.appendChild(form)
    let a1 = document.querySelector('#answer1');
    let a2 = document.querySelector('#answer2');
    let a3 = document.querySelector('#answer3');
    let firstWord;
    function checkAnswer(e){
        e.preventDefault();
        firstWord = correctAnswer.split(' ');

        if (a1.checked && a1.value === firstWord[0]) {
            score+=1
            alert(`Correct! your score is ${score}`)
            winOrLose()
            removeQuestion()
            subject(trivia)
        }  else if (a2.checked && a2.value === firstWord[0]){
            score+=1
            alert(`Correct! your score is ${score}`)
            winOrLose()
            removeQuestion()
            subject(trivia)
        } else if (a3.checked && a3.value === firstWord[0]){
            score+=1
            alert(`Correct! your score is ${score}`)
            winOrLose()
            removeQuestion()
            subject(trivia)
        } else {
            score-=1
            alert(`Incorrect! your score is ${score}`)
            winOrLose()
            removeQuestion()
            subject(trivia)
        }
        const previousForm = document.getElementById('question-form')
        previousForm.classList.add('notvisible');
    }
    

    let submit = document.querySelector('.submitButton');submit.addEventListener('click', checkAnswer)

  
    
}
subject(trivia);

