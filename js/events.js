// system 3

const makeBlueBtn = document.getElementById('makeBlue') ;
makeBlueBtn.onclick = function makeBlueBg(){
    document.body.style.backgroundColor = 'blue'
}

//system 3 another

const makePink = document.getElementById('make-pink') ;
makePink.onclick = makePinkColor ;

function makePinkColor(){
    document.body.style.backgroundColor = 'pink'
}

// system-4 
const makePurple = document.getElementById('make-purple') ;
makePurple.addEventListener('click' , bgPurpleColor )

function bgPurpleColor(){
    document.body.style.backgroundColor = 'purple'
}

// system-4 another 

const makeGreen = document.getElementById('green') ;
makeGreen.addEventListener('click' , function bgGreen(){
    document.body.style.backgroundColor = 'green'
})
// system-4 final
document.getElementById('golden-rod').addEventListener('click' ,function(){
    document.body.style.backgroundColor = 'goldenrod' ;

})