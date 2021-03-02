// var x = document.getElementsByTagName("div");
// var div = 
// console.log(div);
// var heading = div.getElementByTagName("h1");
// console.log(heading);

var div = document.querySelector("div");
console.log(div);

var heading = div.firstElementChild;
console.log(heading);

heading.innerHTML = "Generic Heading";

// paragraphs blue

var paragraphs = div.querySelectorAll("p");
console.log(paragraphs);

var length = paragraphs.length;

for(var i = 0; i < length; i++){
    paragraphs[i].classList.add("blue");
}

// div.appendChild(document.createElement("p")).appendChild(document.createTextNode("new paragraph"));
// console.log(div);


var hobbies = ["hiking", "sewing", "woodworking"];
var ul = document.querySelector("ul");
var hoblen = hobbies.length;

for(var i = 0; i < hoblen; i++){
// ul[i].appendChild(document.createElement("li"));
    var li = document.createElement("li");
    var text = document.createTextNode(hobbies[i])
    li.appendChild(text);
    ul.appendChild(li);
}

var form = document.getElementsByTagName("form")[0];
console.log(form);

form.addEventListener("click", formclick);

function formclick(event){
    event.preventDefault();
    console.log(event.target.id);
    if(event.target.id == "go"){
        event.target.classList.toggle("go");
    }
    else if(event.target.id == "stop"){
        event.target.classList.toggle("stop");
    }
}


