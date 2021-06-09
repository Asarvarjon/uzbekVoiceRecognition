let textElement = document.querySelector(".text")

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition  
let recognition = new SpeechRecognition()

recognition.lang = "uz-UZ"

button.addEventListener("click", event => {
    recognition.start() 
})


recognition.addEventListener("click", event => {
    button.disabled = true 
})

recognition.addEventListener("result", event => {
    const  matn = event.results[0][0].transcript;
    button.disabled = false

    textElement.textContent = matn
})

 