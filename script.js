const quizDb = [
    {
        question: "Q1: what is the full form of HTML",
        a:"hello to my land",
        b:'hey text markup language',
        c:'hypertext makeup language',
        d:'hypertext Markup Language',

        ans:'ans4'

},
{
    question: "Q2: what is the full form of Css?",
    a:"CasCading style sheets",
    b:'CasCading style sheep',
    c:'cartoon Style sheets',
    d: 'CasCadding super sheets',
    ans: "ans1"
},

{
  question: "Q3: What is the full form of HTTP?",
  a:"hypertext transfer Product",
  b: 'Hypertext Test Protocol',
  c:'hey transfer protocol',
  d:"hypertext transfer protoco",
  ans:'ans4'
}
]



const question = document.querySelector(".question");
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#addBtn');
const answers = document.querySelectorAll(".answer");
const result = document.querySelector('#result');

let quizeCount =0;
let score = 0;
const loadQuize = ()=>{
 questionQuize = quizDb[quizeCount];

 question.innerHTML = questionQuize.question;
 option1.innerHTML = questionQuize.a;
 option2.innerHTML = questionQuize.b;
 option3.innerHTML = questionQuize.c;
 option4.innerHTML = questionQuize.d;


}

const getCheckedAns = ()=>{
    let answer;
    
    answers.forEach((currAns)=>{
        if(currAns.checked){
            answer = currAns.id;
        }
    })
    return answer;

}

submit.addEventListener('click', function(){

    const checkAnswer = getCheckedAns();
    if(checkAnswer === quizDb[quizeCount].ans){
        score++;
    }
    quizeCount ++;
    if(quizeCount < quizDb.length){
        loadQuize();
    }
    else{
        result.innerHTML = `<h3> you score ${score}/ ${quizDb.length}</h3>
        <button onClick = "location.reload()">play again</button>`
        result.classList.remove('scoreArea');
    }
    
    console.log(checkAnswer);
})

loadQuize();