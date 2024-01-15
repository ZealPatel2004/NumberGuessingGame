//Number guessing game
const answer=(Math.floor(Math.random()*10+1));//This will count a random number between one and ten
let guesses=0;

document.getElementById("submitButton").onclick=function(){
    let guess=document.getElementById("guessField").value
    guesses+=1;

    if(guess== answer)
    {
        alert("Answer is the number. It took you", guesses, "guesses");

    }
    else if(guess<answer){
        alert("Too Small");
        
    }
    else{
        alert("Too Large");
    }


}