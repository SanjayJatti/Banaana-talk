var translateInput=document.querySelector("#translate-input");
var translateButton=document.querySelector("#translate-button");
var translateOutput=document.querySelector("#translate-output");

var URL="https://api.funtranslations.com/translate/minion.json";

translateButton.addEventListener("click", buttonClickHandler)

function constructURL(input){
    var encodedURI= encodeURI(input);
    return `${URL}?text=${encodedURI}`
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Server down! please try after some time");
}

function buttonClickHandler(event){
    console.log("clicked!");
    var input= translateInput.Value;
    var finalURL = constructURL(input);
    console.log(finalURL);
    fetch(finalURL)
       .then(response =>response.json())
       .then (json => {
           translateOutput.innerText= json.contents.translated;
    })
    .catch(errorHandler);
};
