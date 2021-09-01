//Contentful url and API key containing objects with the 30 trivia questions I came up with

const url = 'https://cdn.contentful.com/spaces/0pgg3owegtt8/environments/master/entries?access_token=nU633R4z0XlML3L6u_6hLTxBQq11TVtEi_i2K_98EAo&content_type=sportsTriviaQuestions'
$.ajax(url)
.then((data) =>{
   trivia = data.items.map((field) => field.fields)
   console.log(data)
   console.log(trivia)

   gameBoard(trivia)
})
//game state
const game = {
    p1: 0,
    p2: 0,
    question:{} 
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

//Game board functions

const answer = (event, question) => {

if(event.target.innerText === question.correctAnswer){
  console.log('right')
} else {
  console.log('wrong')
}
} 

// grab a random question
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

$('li').on('click', (event)=>{answer(event, grabQuestion)})
  // $b.on('click', (event)=>{answer(event, grabQuestion)})
  // $c.on('click', (event)=>{answer(event, grabQuestion)})
  // $d.on('click', (event)=>{answer(event, grabQuestion)})
}
 