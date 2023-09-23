var randomnumber;
var randomcolor;
var simonpattern=[];
var userpattern=[];
var gamerunning=false;
var level=0;
var clickedcolor;

$(".container").hide();

function nextsimonbtn() {

    userpattern=[];
    level+=1;
    $("h1").text("Level "+level);
    
    randomnumber=Math.floor(Math.random()*4);

    if (randomnumber==0) {
        randomcolor="green";
    }
    else if (randomnumber==1) {
        randomcolor="red";
    }
    else if (randomnumber==2) {
        randomcolor="yellow";
    }
    else if (randomnumber==3) {
        randomcolor="blue";
    }

    simonpattern.push(randomcolor);
    $("#"+randomcolor).fadeOut(100).fadeIn(100);
    playSound(randomcolor);
}

function checkpattern(colornumber) {
    if (simonpattern[colornumber]==userpattern[colornumber]) {
        if (simonpattern.length==userpattern.length) {
            setTimeout(function () {
                nextsimonbtn();
            },1000);
        }
    }
    else {
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        },500);
        $(".container").slideUp();
        playSound("wrong");
        $("h1").text("Game Over! Press Any Key To Start Again! \n Your Score was "+level);
        startagain(); 
    }
}

$(document).keypress(function () {
    if (!gamerunning) {
        level=0;
        gamerunning=true;
        $(".container").slideDown();
        $("h1").text("Level "+ level);
        setTimeout(function () {
            nextsimonbtn();
        },400);
    }
});

$(".btn").click(function () {
    clickedcolor=this.id;
    userpattern.push(clickedcolor);

    playSound(clickedcolor);
    btnanimation(clickedcolor);
    checkpattern(userpattern.length-1);
});

$(document).keypress(function (event) {
    if (gamerunning==true && level>1) {
        if (event.key=="g") {
            clickedcolor="green";
            userpattern.push(clickedcolor);
            playSound(clickedcolor);
            btnanimation(clickedcolor);
            checkpattern(userpattern.length-1);
        }
        else if (event.key=="r") {
            clickedcolor="red";
            userpattern.push(clickedcolor);
            playSound(clickedcolor);
            btnanimation(clickedcolor);
            checkpattern(userpattern.length-1);
        }
        else if (event.key=="y") {
            clickedcolor="yellow";
            userpattern.push(clickedcolor);
            playSound(clickedcolor);
            btnanimation(clickedcolor);
            checkpattern(userpattern.length-1);
        }
        else if (event.key=="b") {
            clickedcolor="blue";
            userpattern.push(clickedcolor);
            playSound(clickedcolor);
            btnanimation(clickedcolor);
            checkpattern(userpattern.length-1);
        }
    }
});

function playSound(color) {
  var audio=new Audio("sounds/"+color+".mp3");
  audio.play();
}

function btnanimation(color) {
    $("#"+color).addClass("pressed");
    setTimeout(function () {
        $("#"+color).removeClass("pressed");
    },100);
}
function startagain() {
    simonpattern=[];
    gamerunning=false;
}


