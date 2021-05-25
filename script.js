var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var highscore = document.getElementById('highscore');
var buttons = document.querySelector("#questionanswers");
var startbut = document.getElementById("Startbt");
var page1 =  document.getElementById("page1");
var page2 =  document.getElementById("page2");
var page3 =  document.getElementById("page3");
var message = document.getElementById("particular");
var questiontxt =  document.getElementById("question");
var guess1txt =  document.getElementById("guess1label");
var guess2txt =  document.getElementById("guess2label");
var guess3txt =  document.getElementById("guess3label");
var guess4txt =  document.getElementById("guess4label");
var thissscore = document.getElementById("thisscore");
var initialtxt = document.getElementById("initialtxt");
var timeLeft;
var chkbx = ["guess1","guess2","guess3","guess4"];
var questionscomplete = false;
var questionscore=[];
var t=0;

const quiz=[
    ["Do cows fly? on mars", "yes", "no", "when pushed from a plane", "on mars","guess4"],
    ["Do dogs drink milk? no ", "yes", "no", "sometimes", "after losing a bet","guess2"],
    ["When will i finish coding? bad question", "soon", "saturday", "bad question", "never","guess3"],
    ["Do horse flies prefer chickens ? only city flies", "yes", "no", "only city flies","horses","guess3"],
    ["When is it a good time to clean out garage? tomorrow ", "now", "tomorrow", "yesterday", "never","guess2"],
    ["What time is it? time for a nap", "morning", "evening", "time for a nap", "lunchtime","guess3"] 
];
    // Helper tools for debug
document.addEventListener("keydown", function(e3){
    e3.stopPropagation();
    if(e3.key==="s"){
    console.log("t ",t,"timeleft ",timeLeft,"questionscore ",questionscore,"questionscomplete",questionscomplete);
    console.log("t ", t, quiz[t])
    console.log("t - displayed question" ,questiontxt.textContent,"timeLeft ",timeLeft )
}
});

document.addEventListener("keydown", function(e3){
    e3.stopPropagation();
    if(e3.key==="h"){
    console.log("highscore", localStorage.getItem("highscore"));
}
});


//get questions and guesses and load them

var loadnextquestion = function(t){
    if(t<quiz.length){
        questiontxt.textContent=quiz[t][0];
        guess1txt.textContent=quiz[t][1];
        guess2txt.textContent=quiz[t][2];
        guess3txt.textContent=quiz[t][3];
        guess4txt.textContent=quiz[t][4];
    }
// clearinputs(); dynamically appdn 
};

var checkans = function(t,guess){
    clearinputs();
    if(guess===quiz[t][5]){
        message.textContent="Previous Question was Correct";
        questionscore[t]=1;
    }
    else{
        message.textContent="Previous Question was Wrong";
        questionscore[t]=0;
        timeLeft-=5;
    }
    return;
};

var clearinputs = function(){
    for (var x=0; x < chkbx.length;x++){
        document.getElementById(chkbx[x]).checked=false;
        }
        initialtxt.value="";
        return;
}


// Use Buttons instead of check
buttons.addEventListener("click",  function(e1){
        e1.stopPropagation();
        e1.preventDefault();
        console.log("t ", t, e1.target.id, quiz[t][0],timeLeft);
        checkans(t,e1.target.id);
        t++;
        if(t<quiz.length){loadnextquestion(t);} 
        else{
            score=timeLeft;
            console.log("t ", t, "score ",score);
            timeLeft=0;
            localStorage.setItem("thisscore", score);
            displayMessage(score);
            return;
                }  
    });

// hide pages 2,3





// Display score and hide page 2 and reveal page 3
function displayMessage(score){
    page2.setAttribute("style" ,"display:none");
    page3.setAttribute("style" ,"display:flex");
    
    thissscore.textContent=localStorage.getItem("thisscore");
    highestscore.textContent=localStorage.getItem("highscore");
    console.log( "end of quiz", timeLeft); 
return;
};

// JS code run at page load
// hide pages 2 and 3
page3.setAttribute("style","display:none");
page2.setAttribute("style","display:none");
// Enable highscore access
highscore.addEventListener("click", function(e4){
    e4.preventDefault();
    highscore.textContent="Highscore is "+ localStorage.getItem("highscore")

})
// Start button listener is on, start countdown timer
// on start btn click hide page 1, reveal page 2

startbut.addEventListener("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    countdown(1000,120);
    page1.setAttribute("style","display:none");
    page2.setAttribute("style","display:flex");
});
// Load first question
loadnextquestion(0);

// localStorage.setItem("highscore","25");
