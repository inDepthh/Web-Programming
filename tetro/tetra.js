var obj1 = $('#obj1');
var startGame = $('#start');
var newGame = $('#new');
var quitGame= $("#quit");

$(function() {
  StartGame();
  NewGame();
  Quit()
});

//New Game
function NewGame() {
  newGame.on('click', function() {
    window.location.reload();
  });
}

function Quit() {
  quitGame.on('click', function() {
    window.location.reload();
  });
}

// function GetPos() {
//   var posObj1 = obj1.position();
//   var posQuit = quitGame.position();
//   var posGame = newGame.position();
//   console.log(posObj1);
// }

//make things work
function StartGame() {
  startGame.on('click', function() {
    translate();
    console.log("Starting Game");
    $(this).css("opacity", ".01");
    obj1.css('display', 'block');
  });
}

//make piece move
function translate()  {
  setTimeout(function() {
    obj1.css('transform', 'translatey(30px)');
    }, 1000);
  setTimeout(function() {
    obj1.css('transform', 'translatey(60px)');
    }, 2000);
  setTimeout(function() {
    obj1.css('transform', 'translatey(90px)');
    }, 3000);
  setTimeout(function() {
    obj1.css('transform', 'translatey(120px)');
    }, 4000);
  setTimeout(function() {
    obj1.css('transform', 'translatey(150px)');
    }, 5000);
  setTimeout(function() {
    obj1.css('transform', 'translatey(180px)');
    }, 6000);
  setTimeout(function() {
    obj1.css('transform', 'translatey(210px)');
    }, 7000);
  setTimeout(function() {
    obj1.css('transform', 'translatey(240px)');
    }, 8000);
  setTimeout(function() {
    obj1.css('transform', 'translatey(270px)');
    }, 9000);
   setTimeout(function() {
    obj1.css('transform', 'translatey(300px)');
    }, 10000);
   setTimeout(function() {
    obj1.css('transform', 'translatey(330px)');
    }, 11000);
  setTimeout(function() {
    obj1.css('transform', 'translatey(360px)');
    }, 12000);
   setTimeout(function() {
    obj1.css('transform', 'translatey(390px)');
    }, 13000);
  setTimeout(function() {
    obj1.css('transform', 'translatey(420px)');
    }, 14000);
  setTimeout(function() {
    obj1.css('transform', 'translatey(450px)');
    }, 15000);
  setTimeout(function() {
    obj1.css('transform', 'translatey(480px)');
    }, 16000);
  setTimeout(function() {
    obj1.css('transform', 'translatey(510px)');
    }, 17000);
  setTimeout(function() {
    obj1.css('transform', 'translatey(540px)');
    }, 18000);
  }
