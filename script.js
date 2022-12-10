// const btn = document.querySelector(".btn")
// btn.addEventListener("click", () => {
//     console.log(document.getElementById("game-input").value)
// })
let sum = 0;

const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(1);
    let x = parseInt(event.target["game-input"].value);
    let y = parseInt(getRndInteger())
    // document.getElementById('para').innerHTML = x;
    // document.getElementById('paras').innerHTML = y;



    console.log(x, y);
    if (x === y) {
        // document.getElementById("para").innerHTML = "game over. your score is " + sum;
        readOut("Oooppss!!!  Game is Over!!")
        alert("OOOOOOPPSSSSSS!!!  Game is Over!!  your score is " + sum);
        sum = 0;


    }
    else {
        sum = sum + x;
        document.getElementById("heading").innerHTML = `your number ${x}, opponent's number ${y} <br> your score till yet is ${sum}`;


        console.log(sum);
    }
}

function getRndInteger() {
    return Math.floor(Math.random() * 10);

}


function readOut(message) {
    const speech = new SpeechSynthesisUtterance()
    speech.text = message;
    speech.volume = 1;
    const allVoices = speechSynthesis.getVoices();
    speech.voice = allVoices[8];
    window.speechSynthesis.speak(speech)

}

