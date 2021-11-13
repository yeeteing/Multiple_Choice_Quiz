const questions= [
    {
        question:"Which province do MUN located in?",
        option:["Ontario","British Columbia","Newfoundland and Labrador","Quebec"],
        answer:"Newfoundland and Labrador"

    },
    {
        question:"What living things are naturally green color?",
        option:["grass","monkey","human","whales"],
        answer:"grass"
    },
    {
        question:"What is the color of my unicorn?",
        option:["pink","purple","green","white"],
        answer:"pink"
    }
];
let questionNo=0;
let correct=0;

document.addEventListener("DOMContentLoaded", ()=>{
    loadingQ();
});


function loadingQ(){
    //load question into page
    document.querySelector("#quest").innerHTML=questions[questionNo].question;
    
    //load options
    for(const op of questions[questionNo].option){
        document.querySelector("#opt").innerHTML+=`<button class="b">${op}</button>`;
    }

     //load correct question into page
    document.querySelector("#corr").innerHTML=correct +" out of "+questions.length;
    
    //load restart button
    document.querySelector("#restart").onclick=()=>{
        questionNo=0;
        correct=0;
        document.querySelector("#quest").innerHTML="";
        document.querySelector("#opt").innerHTML="";
        loadingQ();
    }

    //if any options being choose..
    document.querySelectorAll(".b").forEach(op=>{
        
        op.onclick=()=>{
            
            if(op.textContent == questions[questionNo].answer ){
                document.querySelector("#quest").innerHTML="";
                document.querySelector("#opt").innerHTML="";
                correct+=1;
                questionNo+=1;
                
                if (questionNo!=questions.length){
                    loadingQ();

                }else{
                    document.querySelector("#corr").innerHTML=correct +" out of "+questions.length;
                    document.createElement("button").onClick
    
                }   
                
            }
            
            else{
                document.querySelector("#quest").innerHTML="";
                document.querySelector("#opt").innerHTML="";
            
            }
        }
    })
}