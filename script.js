var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var highscore = document.getElementById('highscore');
var buttons = document.getElementById("questionanswers");
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
var initials = document.getElementById("initials");
var Intialsbt = document.getElementById("Intialsbt");
var timeLeft;
var intls;
var chkbx = ["guess1","guess2","guess3","guess4"];
var questionscomplete = false;
var questionscore=[];
var t=0;
var tag;

const quiz=[
    ["Do cows fly? ", "yes", "no", "when pushed from a plane", "on mars","guess4"],
    ["Do dogs drink milk? ", "yes", "no", "sometimes", "after losing a bet","guess2"],
    ["When will i finish coding? ", "soon", "saturday", "bad question", "never","guess3"],
    ["Do horse flies prefer chickens ? ", "yes", "no", "only city flies","horses","guess3"],
    ["When is it a good time to clean out garage? ", "now", "tomorrow", "yesterday", "never","guess2"],
    ["What time is it? ", "morning", "evening", "time for a nap", "lunchtime","guess3"] 
];
// Helper tools for debug
// document.addEventListener("keydown", function(e3){
//     e3.stopPropagation();
//     if(e3.key==="s"){
//     console.log("t ",t,"timeleft ",timeLeft,"questionscore ",questionscore,"questionscomplete",questionscomplete);
//     console.log("t ", t, quiz[t])
//     console.log("t - displayed question" ,questiontxt.textContent,"timeLeft ",timeLeft )
// }
// });

// document.addEventListener("keydown", function(e3){
//     e3.stopPropagation();
//     if(e3.key==="h"){
//     console.log("highscore", localStorage.getItem("highscore"));
// }
// });

Intialsbt.addEventListener("click",function(e3){
   e3.preventDefault();
   var high = parseInt(localStorage.getItem("highscore"));
   var now = parseInt(localStorage.getItem("thisscore"));
   if(now > high){
       localStorage.setItem("highscore",now);
   }
  location.reload();
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

// Radio button event listner for guesses targeting questionanswer id 
// using bubbling up of any button to trigger event.
buttons.addEventListener("click", function(e1){
        e1.stopPropagation();
        e1.preventDefault();
        if(t<quiz.length){
        checkans(t,e1.target.id);
         }       
    // Load next question     
        t++;
        // console.log("tb ", t, e1.target.id, quiz[t][0],questionscore,timeLeft);
        if(t<quiz.length){loadnextquestion(t);}
        else{
            score=timeLeft;
            console.log("t ", t, "score ",score);
            timeLeft=0;
            localStorage.setItem("thisscore", score);
            displayMessage(score);
            return false;
                }  
    });


// Display score and hide page 2 and reveal page 3
function displayMessage(score){
    page2.setAttribute("style" ,"display:none");
    page3.setAttribute("style" ,"display:flex");
    thissscore.textContent=localStorage.getItem("thisscore");
    highestscore.textContent=localStorage.getItem("highscore");
    console.log( "end of quiz", timeLeft); 
return;
};


// Enable highscore access
var tag;
var initialshs;
var tagbutton;
// Retrieves high score from local memory from top left header element
highscore.addEventListener("click",function (e4){
    console.log("high score");
    e4.preventDefault();
    highscore.textContent="Enter your initials : ";
    tag = document.createElement("input");
    taglabel = document.createElement("label");
    tagbutton = document.createElement("button");
    tag.id="ints";
    tagbutton.innerHTML="submit";
    // taglabel.htmlFor="ints";
    tag.type="text";
    tag.placeholder="type here";
    // highscore.appendChild(taglabel);
    highscore.appendChild(tag);
    highscore.appendChild(tagbutton);
    tagbutton.addEventListener('click',function(e5){
        // localStorage.getItem("GHM")
        // console.log(tag.value);
        // console.log("inside high score",)
    if(tag.value != null){
        highscore.textContent=tag.value+" High Score is: "+localStorage.getItem(tag.value);}
        else {highscore.textContent=" Nobody with these initials, keep playing and register your score "}
    },{once:true});
    } ,{once: true});

// Start button listener is on, start countdown timer
// on start btn click hide page 1, reveal page 2

startbut.addEventListener("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    countdown(1000,120);
    page1.setAttribute("style","display:none");
    page2.setAttribute("style","display:flex");
});

// JS code run at page load
// hide pages 2 and 3 and Load first question
page2.setAttribute("style","display:none");
page3.setAttribute("style","display:none");
loadnextquestion(0);
// localStorage.setItem("GHM","107");
console.log("length of quiz ", localStorage.getItem("Frank"))

