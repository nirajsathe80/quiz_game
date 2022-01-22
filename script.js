let questions = [

    {
        question : 'What is full form of HTML' , 
        a:'Hypertext making language' , 
        b:'Hypertext markup language' ,
        c: 'Hydro making language' , 
        d:'hypertext markup level' , 
        ans: 'ans2'
    } ,

    {
        question : 'javaScript is a ____________ language' , 
        a :  'Object-Based' ,
        b :  'Assembly-language' , 
        c :  'Object-Oriented' ,
        d : 'High-level' ,
        ans: 'ans3'
    } , 

    {
        question : 'How many ways CSS can be added to html documents' , 
        a:'Inline css' , 
        b:'Internal css' ,
        c: 'External css' , 
        d:'All of the above' , 
        ans: 'ans4'
    } , 

    {
        question : 'Which is the text formatting element in Html' , 
        a:'p tag' , 
        b:'h1 tag' ,
        c: 'strong tag' , 
        d:'address tag' , 
        ans:"ans3"  
    }
] ; 


let submit = document.querySelector("#submit") ; 

let inputQuestion  = document.querySelector("h2") ;

let option1 = document.querySelector("#option1") ;
let option2 = document.querySelector("#option2") ;
let option3 = document.querySelector("#option3") ;
let option4 = document.querySelector("#option4") ;

let answers = document.querySelectorAll(".question") ; 

let answerText = document.querySelector("#result") ; 

let questionCount = 0 ; 
let score = 0 ; 
const questionFunction = () => {
    inputQuestion.innerHTML = questions[questionCount].question ; 
    option1.innerHTML = questions[questionCount].a ;
    option2.innerHTML = questions[questionCount].b ;  
    option3.innerHTML = questions[questionCount].c ;
    option4.innerHTML = questions[questionCount].d ;
} ; 

questionFunction() ;

let questionAnswer = () => {
    let answer ; 
    answers.forEach( (correctAns) => {
        if(correctAns.checked){
            answer = correctAns.id ; 
        }
    })
    return answer ; 
}

 

submit.addEventListener('click' , () => { 
    if(questionCount < questions.length ){
        let result = questionAnswer() ;
        console.log(result);
        if(result == questions[questionCount].ans){
            score++ ; 
        }
        questionCount++ ; 
        questionFunction() ;
    }
    else{
        answerText.style.display = 'block' ; 
        answerText.innerHTML = `
            <h2> You scored ${score} out of ${questions.length} </h2>
            <button class="btn" onclick="location.reload()">Play agarin</button>
        `
    }
    

})