

let ul = document.createElement("ul");
let li = document.createElement("li");



li.append("Style #1");
ul.append(li);
li.style.border = "2px solid black";
li.style.width = "80px"
li.style.height = "30px"
li.style.textAlign = "center";
document.body.append(ul);






let ul2 = document.createElement("ul");
let li2 = document.createElement("li");           // домашка



li2.append("Style #2");
ul2.append(li2);
li2.style.textAlign = "center";
li2.style.background = "pink";
li2.style.border = "2px solid pink";
li2.style.width = "80px"
li2.style.height = "30px"
document.body.append(ul2);


