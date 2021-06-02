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
var initsect = document.getElementById("initsect");
var initials = document.getElementById("initials");
var Intialsbt = document.getElementById("Intialsbt");
var highestscore=document.getElementById("highestscore");
var timeLeft;
var intls;
var chkbx = ["guess1","guess2","guess3","guess4"];
var questionscore=[];
var t=0;
// Quiz stored as array with questions, guesses and answer.
const quiz=[
    ["Do cows fly? ", "yes", "no", "when pushed from a plane", "on mars","guess4"],
    ["Do dogs drink milk? ", "yes", "no", "sometimes", "after losing a bet","guess2"],
    ["When will i finish coding? ", "soon", "saturday", "bad question", "never","guess3"],
    ["Do horse flies prefer chickens ? ", "yes", "no", "only city flies","horses","guess3"],
    ["When is it a good time to clean out garage? ", "now", "tomorrow", "yesterday", "never","guess2"],
    ["What time is it? ", "morning", "evening", "time for a nap", "lunchtime","guess3"] 
];
// End game- initial input retrieve/update high score, playagain.
Intialsbt.addEventListener("click",function(e7){
   e7.preventDefault();
   var latestinit=initials.value;
   var now = parseInt(localStorage.getItem("thisscore"));
   if(localStorage.getItem(latestinit)!==null){
        var high = parseInt(localStorage.getItem(latestinit));
        if(now > high){
            localStorage.setItem(latestinit,now);
            highestscore.textContent=now;
            }
        else{highestscore.textContent=localStorage.getItem(latestinit);}
    }
    // Firstime player-load score and set highscore to now
   else{ localStorage.setItem(latestinit,now);
    highestscore.textContent = now}
    Intialsbt.parentNode.removeChild(Intialsbt);
    var playagain = document.createElement("button");
    playagain.innerHTML="PlayAgain";
    initsect.appendChild(playagain);
    playagain.addEventListener('click',function(e9){
        location.reload();
    })
});

//get question 't' and guesses and load them from quiz[t]
var loadnextquestion = function(t){
    if(t<quiz.length){
        questiontxt.textContent=quiz[t][0];
        guess1txt.textContent=quiz[t][1];
        guess2txt.textContent=quiz[t][2];
        guess3txt.textContent=quiz[t][3];
        guess4txt.textContent=quiz[t][4];
    }
};

// Checks to see if answer is correct, if not dock time by 10 seconds
var checkans = function(t,guess){
    clearinputs();
    if(guess===quiz[t][5]){
        message.textContent="Previous Question was Correct";
        questionscore[t]=1;
    }
    else{
        message.textContent="Previous Question was Wrong";
        questionscore[t]=0;
        timeLeft-=10;
    }
    return;
};

// Clears all inputs
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
// increment to next question and load     
    t++;
    if(t<quiz.length){loadnextquestion(t);}
    else{
        score=timeLeft;
        timeLeft=0;
        localStorage.setItem("thisscore", score);
        displayMessage(localStorage.getItem("thisscore"));
        return false;
            }  
    });

// Display current score and hide page 2 and reveal page 3
function displayMessage(score){
    page2.setAttribute("style" ,"display:none");
    page3.setAttribute("style" ,"display:flex");
    thissscore.textContent=localStorage.getItem("thisscore");
return;
};

var tag;
var initialshs;
var tagbutton;
// Retrieves high score from local memory from top left header element
highscore.addEventListener("click",function (e4){
    e4.preventDefault();
    highscore.textContent="Enter initials : ";
    tag = document.createElement("input");
    tagbutton = document.createElement("button");
    tagbutton.innerHTML="submit";
    tag.type="text";
    tag.placeholder="Cap letters, no spaces";
    highscore.appendChild(tag);
    highscore.appendChild(tagbutton);
    tagbutton.addEventListener('click',function(e5){
// Checks for if initials exist in local storage
    if(localStorage.getItem(tag.value) !== null){
        highscore.textContent=tag.value + " High Score is: "+localStorage.getItem(tag.value);}
        else {highscore.textContent=" Nobody with these initials, keep playing and register your score "}
        var resset = document.createElement("button");
        resset.innerHTML="Reset";
        highscore.appendChild(resset);
        resset.addEventListener('click', function(e6){
            location.reload();
        })
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

// Start JS code
// hide pages 2 and 3 and Load first question
page2.setAttribute("style","display:none");
page3.setAttribute("style","display:none");
loadnextquestion(0);

