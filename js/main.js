function getInputValue() {
    var inputBox = document.getElementById("inputBox");
    return inputBox.value;
}

function clean() {
    var inputBox = document.getElementById("inputBox");
    inputBox.value = "";
    inputBox.focus();
}


$(document).keypress(function(e) {
    if(e.which === 13) {
        var inputBoxValue = getInputValue();
        time();

        doMessage(inputBoxValue);
        clean();
       
    }
});
function time () {
    var date = new Date();
    var m = date.getMinutes();
    var h = date.getHours();    
    var hora=h+":"+m;
    return hora; 
}

function doMessage(messageText) {
    var message = document.getElementById("background-wssp");
    
    // //Crear el elemento padre y sus hijos
    var elemento = document.createElement("div");
    elemento.className = "boxConversa";
    elemento.innerHTML = messageText;
    
    message.appendChild(elemento);
    var horas=time();
    $(".boxConversa").append('<p class="hour">'+horas+"</p>")
    // var elemento1 = document.createElement("span")
    // elemento1.className = "hour";
    // boxConversa.innerHTML = horas;
    // elemento1.appendChild(boxConversa);

    
};


