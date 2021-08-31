//Contentful url and API key containing objects with the 30 trivia questions I came up with

const url = 'https://cdn.contentful.com/spaces/0pgg3owegtt8/environments/master/entries?access_token=nU633R4z0XlML3L6u_6hLTxBQq11TVtEi_i2K_98EAo&content_type=sportsTriviaQuestions'
$.ajax(url)
.then((data) =>{
    console.log(data)
})

//game state
const game = {
    p1: 0,
    p2: 0,
    question:{} 
    }

//dom variables for game pieces
const $question = $('#question')
const $answer = $('#answer')
const $a = $('#a')
const $b = $('#b')
const $c = $('#c')
const $c = $('#c')
const $d = $('#d')
const $scores = $('#scores')
const $p1 = $('#p1')
const $p1score = $('#p1score')
const $p2 = $('#p2')
const $p2score = $('#p2score')
const $reset = $('#reset')
const $button = $('#button')
    
