


const questions = [
    {
        sawal : 'who was the first Hokage',
        jawab : [
            {text:'Tobirama', correct : false},
            {text:'Hashirama', correct : true},
            {text:'Naruto', correct : false},
            {text:'Kakasi', correct : false}
        ]
    },
    {
        sawal : 'who Kill the all uchiha clain',
        jawab : [
            {text:'itachi', correct : true},
            {text:'obitu', correct : false},
            {text:'sauske', correct : false},
            {text:'Kakasi', correct : false}
        ]
    },
    {
        sawal : 'which was not a jiraya student',
        jawab : [
            {text:'Nagato', correct : false},
            {text:'Minato', correct : false},
            {text:'Naruto', correct : false},
            {text:'itachi', correct : true}
        ]
    }
  
]


const questionElement = document.getElementById('question-area');

const answerDiv = document.getElementById('answerButton')
const Next = document.getElementById('nextButton')


let currentQuestionIndex = 0;
let score = 0;


function startKBC(){
    currentQuestionIndex = 0;
    score = 0;
    Next.innerHTML = 'Next'
    showQuestion();
}

function showQuestion(){

    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + " . " + currentQuestion.sawal

    currentQuestion.jawab.forEach((answer)=>{
        const btn = document.createElement('button');
        btn.innerHTML = answer.text;
        btn.classList.add("btn");
        answerDiv.appendChild(btn)
    })

}
showQuestion()