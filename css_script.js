const quizDB =[
    {
        question: "Q1 : The full form of CSS is:",
        a: "Cascading Style Sheets",
        b: "Coloured Special Sheets",
        c: "Color and Style Sheets",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q2 : How can we change the background color of an element ? ",
        a: "background-color",
        b: "color",
        c: "Both A and B",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q3 : In how many ways can CSS be written in ?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        ans: "ans3"
    },
    {
        question: "Q4 : What type of CSS is generally recommended for designing large web pages? ",
        a: "Inline",
        b: "Internal",
        c: "External",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: "Q5 : Which HTML tag is used to declare internal CSS ?",
        a: "<style>",
        b: "<link>",
        c: "<script>",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q6 : How can we select an element with a specific ID in CSS ?",
        a: " # ",
        b: " . ",
        c: " ^ ",
        d: "None of the above",
        ans: "ans1"
    },{
        question: "Q7 : How can we write comments in CSS ?",
        a: "/* */",
        b: "//",
        c: "#",
        d: "All of the above",
        ans: "ans1"
    },
    {
        question: "Q8 : Can negative  valuse be allowed in padding property ?",
        a: "Yes",
        b: "No ",
        c: "Depends on property",
        d: "None of the above",
        ans: "ans2"
    },
    {
        question: "Q9 : We can make rounded borders around elements using which CSS element?",
        a: "border-collapse",
        b: "border-round",
        c: "border-radius",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: "Q10 : What are the uses of CSS pseudo-element ?",
        a: "Style specified parts of an element",
        b: "Style the first letter or line of an element",
        c: "Isert content before or after the element",
        d: "All of the above",
        ans: "ans4"
    }
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