let numChar =document.getElementById('numChar')
let numWords = document.getElementById('numWords')
let text = document.getElementById('textInput')
let button = document.getElementById('count')
let reset = document.getElementById('hidde')

let numberOfWords = []
let numberOfChar = []

function count(){

}

button.addEventListener( 'click', function(){
    numberOfChar.push(text.value.replace(/ /g,'').split(''))
    numberOfWords.push(text.value.trim().split(' '))
    numWords.innerHTML =  numberOfWords[0].length
    numChar.innerHTML = numberOfChar[0].length
    button.id = 'hidden'
    reset.id = 'reset'
})

reset.addEventListener( 'click', function(){
    location.reload()
})