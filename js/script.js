//Contentful url and API key containing objects with the 30 trivia questions I came up with

const url = 'https://cdn.contentful.com/spaces/0pgg3owegtt8/environments/master/entries?access_token=nU633R4z0XlML3L6u_6hLTxBQq11TVtEi_i2K_98EAo&content_type=sportsTriviaQuestions'
$.ajax(url)
.then((data) =>{
   trivia = data.items.map((field) => field.fields)
   console.log(data)
   console.log(trivia)

   gameBoard(trivia)
})
//created a turn system
let turn = 0;

//game state
const game = {
    p1: 0, 
    p2: 0, 
    question:{},
    answerChosen: true
    }

    let trivia = []

//dom variables for game pieces
const $question = $('#question')
const $answer = $('#answer')
const $a = $('#a')
const $b = $('#b')
const $c = $('#c')
const $d = $('#d')
const $scores = $('#scores')
const $p1 = $('#p1')
const $p1score = $('#p1score')
const $p2 = $('#p2')
const $p2score = $('#p2score')
const $reset = $('#reset')
const $button = $('#button')
const $turns = $('#turns')
const $winner= $('#winner')


$turns.text('READY TO PLAY - 15 POINTS TO WIN')



//Game board functions

// Combined right answer and wrong answer functions into one function
const answerChecker = (event, question) => {

//used modulo to toggle between player one's turn and player two's turn  
if(game.answerChosen){
    if(turn % 2 === 0){
      $winner.text(' ')
      $turns.text("PLAYER TWO TURN")
    }
    else{
      $winner.text(' ')
      $turns.text("PLAYER ONE TURN")
    }
    
    //used trim to remove any extra white spaces in the questions I created in contentful. I accidentally added white spaces after some answers and certain questions would break the game. Looked up how to use trim()

    //if answer clicked is correct on each players turn give them a point
    if(event.target.innerText.trim() == question.correctAnswer.trim()){
      
      if(turn % 2 === 0){
         // player 1 turn
        game.p1 ++
        }else{
        // player 2 turn
        $turns.text('PLAYER ONE TURN')
        game.p2++        
      }
      

    }
   
    turn ++
    gameBoard(trivia)
  }
 
  
  
}

const resetBoard = (event) =>{
  $p1score.text(game.p1 = 0)
  $p2score.text(game.p2 = 0)
  $turns.text('GAME RESET - PLAY AGAIN? - PLAYER ONE TURN')
  turn = 0
}

const winner =(event) =>{if(game.p1 === 15){
  resetBoard()
  $winner.text('PLAYER ONE WINS')
} if(game.p2 === 15){
  resetBoard()
  $winner.text('PLAYER TWO WINS')
} 
}

// grab a random question and set the game board 
const gameBoard = (field) => {
 
  const randomQ = Math.floor(Math.random() * field.length)
  const grabQuestion = field[randomQ]

  $question.text(grabQuestion.question)
  $a.text(grabQuestion.a)
  $b.text(grabQuestion.b) 
  $c.text(grabQuestion.c) 
  $d.text(grabQuestion.d)

  $p1score.text(game.p1)
  $p2score.text(game.p2)

  
 

winner()

$('li').off()
$('li').on('click', (event)=>{answerChecker(event, grabQuestion)})
$button.on('click', (event)=>{resetBoard(event, grabQuestion)})
}

console.log(game.p1)

 