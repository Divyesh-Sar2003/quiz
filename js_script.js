const quizDB =[
    {
        question: "Q1 : what the full form of HTML ?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Makeup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },



];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answers');

const showScore = document.querySelectorAll('#showScore');

let questionCount = 0;
let score =0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];
    
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
};
loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked)
        {
            answer = curAnsElem.id;
        }
    });
    
    return answer ;    
};

const deselectAll = () =>  {
    answers.forEach((curAnsElem) => curAnsElem.checked =  false );
}

submit.addEventListener('click', () =>{

    const checkedAnswer =getCheckAnswer();
    console.log(checkedAnswer);
    
    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();  

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML =`
        <h3> you Scored ${score}/${quizDB.length} </h3>`;

        showScore.classList.remove('scoreArea');

    }

});