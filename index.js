const quizDB = [
    

{question:"Q1. In 1768, Captain James Cook set out to explore which ocean?",
a:"Pacific Ocean",
b: "Atlantic Ocean",
c: "Indian Ocean",
d: "Arctic Ocean",
ans:"ans1"
},

{question:"Q2. What is actually electricity?",
a:" A flow of water",
b: "A flow of air",
c: "A flow of electrons",
d: "A flow of atoms",
ans:"ans3"},

{question:"Q3. Which of the following is not an international organisation?",
a: "FIFA",
b: "NATO",
c: "ASEAN",
d: "FBI",
ans:"ans4"
},
{question:"Q4. Which of the following disorders is the fear of being alone?",
a: "Agoraphobia",
b: "Aerophobia",
c: "Acrophobia",
d: "Arachnophobia",
ans:"ans1"
}
];

const question = document.querySelector('.question')
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')

const submit=document.querySelector('#submit');
const answers = document.querySelectorAll('.answer')

const showScore = document.querySelector('#showScore')
let questionCount = 0;
let score=0;
const loadQuestion=()=>{
    const questionList =   quizDB[questionCount];
    question.innerText =questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
loadQuestion();
const getCheckAnswer=()=>{
    let answer;
    answers.forEach((currAnsElem)=>{
        if(currAnsElem.checked){
            answer = currAnsElem.id
        }
    })
    return answer
}

const deselectAll=()=>{
    answers.forEach((currAnsElem)=>currAnsElem.checked = false)
}

submit.addEventListener('click',()=>{
    const checkedAnswer=getCheckAnswer();
   console.log(checkedAnswer)
   if(checkedAnswer===quizDB[questionCount].ans){
    score++;
   }
   questionCount++;

   deselectAll();
   if(questionCount<quizDB.length){
    loadQuestion();
   }
   else{
showScore.innerHTML  = `<h3>You Scored ${score}/${quizDB.length}👌</h3>
<button class="btn" onclick="location.reload()">Play Again</button>
`;
showScore.classList.remove('scoreArea')
   }
});