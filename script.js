var button = document.getElementsByClassName("container__rating");

var result = document.querySelector(".container2__rating__result");

function rating(ratingResult) {
    
    result.textContent = ratingResult;
    
}

function ratingSubmit() {

    if(result.textContent >= 1) {
        document.querySelector(".container1").style.display = "none";
        document.querySelector(".container2").style.display = "block";
    } else {
        alert("Please, select a valid rating!")
    }

}

var addSelectClass = function(){
    removeSelectClass();
    this.classList.add('selected');	
}

var removeSelectClass = function(){
    for (var i = 0; i < button.length; i++) {
        button[i].classList.remove('selected')
    }
}

for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click",addSelectClass);
}