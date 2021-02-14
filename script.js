
/*
let ul = document.createElement("ul");
let li = document.createElement("li");

li.append("Style #1");
ul.append(li);
li.style.border = "2px solid black";
li.style.width = "120px"
li.style.height = "50px"
li.style.fontSize ="22px"
li.style.textAlign = "center";
document.body.append(ul);






let ul2 = document.createElement("ul");
let li2 = document.createElement("li");           

li2.append("Style #2");
ul2.append(li2);
li2.style.textAlign = "center";
li2.style.background = "pink";
li2.style.border = "2px solid pink";
li2.style.width = "105px"
li2.style.height = "50px"
li2.style.fontSize ="22px"
document.body.append(ul2);






let ul3 = document.createElement("ul");
let li3 = document.createElement("li");           

li3.append("Style #3");
ul3.append(li3);
li3.style.textAlign = "center";
li3.style.border = "5px dashed red";
li3.style.width = "105px"
li3.style.color = "red"
li3.style.fontWeight ="800"
li3.style.fontSize ="22px"
li3.style.height = "30px"
document.body.append(ul3);







let ul4 = document.createElement("ul");
let li4 = document.createElement("li");           

li4.append("Style #4");
ul4.append(li4);
li4.style.textAlign = "center";
li4.style.border = "9px dotted green";
li4.style.width = "140px"
li4.style.color = "blue"
li4.style.fontWeight ="800"
li4.style.fontSize ="22px"
li4.style.height = "40px"
document.body.append(ul4);






let ul5 = document.createElement("ul");
let li5 = document.createElement("li");           

li5.append("Style #5");
ul5.append(li5);
li5.style.textAlign = "center";
li5.style.borderTop = "11px solid green";
li5.style.borderBottom = "11px solid pink";
li5.style.borderRight = "11px solid black";
li5.style.borderLeft = "11px solid lightblue";
li5.style.width = "110px"
li5.style.color = "orange"
li5.style.fontWeigh = "800"
li5.style.textDecoration = "underline"
li5.style.fontSize ="22px"
li5.style.height = "30px"
document.body.append(ul5);




let ul6 = document.createElement("ul");
let li6 = document.createElement("li");           

li6.append("Style #6");
ul6.append(li6);
li6.style.textAlign = "end";
li6.style.border = "9px solid black";
li6.style.width = "200px"
li6.style.backgroundColor = "black"
li6.style.fontStyle = "italic"
li6.style.color = "white"
li6.style.fontWeight ="800"
li6.style.fontSize ="22px"
li6.style.height = "30px"
document.body.append(ul6);






let ul7 = document.createElement("ul");
let li7 = document.createElement("li");           

li7.append("Style #7");
ul7.append(li7);

li7.style.border = "6px solid  rgb(240, 208, 104)";
li7.style.width = "209px"
li7.style.color = " rgb(240, 208, 104)"
li7.style.fontWeight ="800"
li7.style.backgroundColor = "beige"
li7.style.fontSize ="22px"
li7.style.height = "53px"
document.body.append(ul7);







let ul8 = document.createElement("ul");
let li8 = document.createElement("li");           

li8.append("Style #8");
ul8.append(li8);
li8.style.textAlign = "center";
li8.style.border = "3.5px dashed white";
li8.style.backgroundColor = "blue"
li8.style.width = "218px"
li8.style.color = "white"
li8.style.fontWeight ="800"
li8.style.fontSize ="40px"
li8.style.height = "45px"
document.body.append(ul8);





let ul9 = document.createElement("ul");
let li9 = document.createElement("li");

ul9.append(li9);
li9.append("Style #9");
li9.style.color = "white";
li9.style.fontSize = "25px";
li9.style.borderTop = "17px dotted rgb(240, 208, 104)"
li9.style.borderBottom = "17px dotted rgb(240, 208, 104)"
li9.style.width = "160px"
li9.style.height = "40px"
li9.style.backgroundColor = "rgb(206, 58, 58)"
li9.style.textAlign = "center"

document.body.append(ul9);







let ul10 = document.createElement("ul");
let li10 = document.createElement("li");           

li10.append("Style #10");
ul10.append(li10);
li10.style.textAlign = "center";
li10.style.borderTop = "20px dashed white";
li10.style.borderBottom = "20px dashed white";
li10.style.backgroundColor = "rgb(202, 202, 82"
li10.style.width = "160px"
li10.style.color = "white"
li10.style.fontWeight ="800"
li10.style.fontSize ="25px"
li10.style.height = "45px"
document.body.append(ul10);

*/













/*
let h1 = document.createElement('h1');
h1.innerText = "0";
h1.style.color = "red";
document.body.append(h1);





let colorButton = document.createElement('colorButton')
document.body.append(colorButton);
let colorButton = document.querySelector(".color");


let increaseButton = createElement('increaseButton')
let increaseButton = document.querySelector(".size-plus");


let decreaseButton = document.querySelector(".size-minus");
let plusButton = document.querySelector(".plus");
let minusButton = document.querySelector(".minus");

let header = document.querySelector("h1");
header.innerText = 0;
let num = 0;

colorButton.addEventListener("click", function(){
    header.style.color = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();

})

increaseButton.addEventListener("click", function(){
    num ++;
    header.style.fontSize = num + "5px";
})
decreaseButton.addEventListener("click", function(){
    num --;
    header.style.fontSize = num + "5px";
})

plusButton.addEventListener("click", function(){
    num ++;
    header.innerText = num;

})

minusButton.addEventListener("click", function(){
    num --;
    header.innerText = num;
})


*/


/*
let text = document.querySelector('#text');
text.innerText = ' ';

let pw = document.querySelector('#pw');
pw.addEventListener('keydown', function(event){

    if(pw.value.length <= 5){
        text.innerText ='too hopeless!'
    }
    if(pw.value.length >= 7){
        text.innerText ='okay it fits...'
    }
    if(pw.value.length >= 15){
        text.innerText ='excellent!'
    }
})



let h3 = document.querySelector('h3');
h3.innerText = '0'

let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');

let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let multiply = document.querySelector('#multiply');
let division = document.querySelector('#division');


plus.addEventListener('click', function(){
    h3.innerText = Number(number1.value) + Number(number2.value);
 });
 minus.addEventListener('click', function(){
     h3.innerText = Number(number1.value) - Number(number2.value);
  });
  multiply.addEventListener('click', function(){
     h3.innerText = Number(number1.value) * Number(number2.value);
  });
  division.addEventListener('click', function(){
     h3.innerText = Number(number1.value) / Number(number2.value);
  });
 

  let h4 = document.querySelector('h4');
  h4.innerText = '0'
  let square = document.querySelector('#square');
  let cube = document.querySelector('#cube');
  let root = document.querySelector('#root')

  square.addEventListener('click' , function(){
    h4.innerText = Number(squarecube.value) **(2/1);
});
  cube.addEventListener('click' , function(){
    h4.innerText = Number(squarecube.value) **(3/1);
})
  root.addEventListener('click', function(){
      h4.innerText = Number(squarecube.value) **(1/2);
  })

*/


