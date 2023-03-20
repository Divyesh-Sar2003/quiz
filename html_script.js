const quizDB =[
    {
        question: "Q1 : what the full form of HTML ?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Makeup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2 : How many sizes of headers are available in HTML by default ?",
        a: "5",
        b: "1",
        c: "3",
        d: "6",
        ans: "ans4"
    },
    {
        question: "Q3 : What are the types of lists available in HTML ?" ,
        a: "Ordered, Unordered Lists",
        b: "Bulleted, Numbered Lists",
        c: "Named, Unnamed Lists",
        d: "None of this above",
        ans: "ans1"

    },
    {
        question: "Q4 : How to create an ordered list in HTML?",
        a: "<ul>",
        b: "<ol>",
        c: "<href>",
        d: "<b>",
        ans: "ans2"
    },
    {
        question: "Q5 : Which of the following is correct about HTML?",
        a: "HTML uses User defined Tags",
        b: "HTML uses tags defined within the language",
        c: "Both A and B ",
        d: "None of this above",
        ans: "ans2"
    },
    {
        question: "Q6 : What is the effect of the <b> tag?",
        a: "It converts the text within it to bold font.",
        b: "It is used to write black-colored font.",
        c: "It is used to change the font size. ",
        d: "None of this above",
        ans: "ans1"
    },    
    {
        question: "Q7 : What are the attributes used to change the size of an image?",
        a: "Width and height",
        b: "Big and Small",
        c: "Top and bottom",
        d: "None of this above",
        ans: "ans1"
    },    
    {
        question: "Q8 : Which of the following properties is used to change the font of text?",
        a: "Font-family",
        b: "font-size",
        c: "text-align",
        d: "None of this above",
        ans: "ans1"
    },
    {
        question: "Q9 : What is the correct syntax to write an HTML comment?",
        a: "// Comment",
        b: "# Comment",
        c: "<!-- Comment -->",
        d: "/* Comment */",
        ans: "ans3"
    }, 
    {
        question: "Q10 : Colors are defined in HTML using?",
        a: "RGBA Values",
        b: "HEX Values",
        c: "RGB Values",
        d: "All  of the above",
        ans: "ans3"
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