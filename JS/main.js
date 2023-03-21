 
//  DoM document object model

//  1-select
//  var demo = document.getElementById('demo');//one tag
//  var h1s = document.getElementsByTagName('h1');//html collection not array (list)
//  var x = document.getElementsByClassName('text-center');//html collection
//  var inputs = document.getElementsByName('gender');//by name attribute - nodeList
//  var username = document.getElementsByName('username');//by name attribute - nodeList
//  var elemnts = document.querySelectorAll('any css selector'); //nodelist
//  var elemnts = document.querySelector('.text-center');//single tag
// var tbody = document.body;
// var thead=document.head;
// var x=document.linkes;  a
// var imgElem=document.images; img


// html collection not array >> list(contain tags only)
// nodeList not array >>> [list contain tags , attributes , text]

// 2-
// addEventListener()  =>  method object

//          1-tag?? >> select
//          2-event ??
//          3-action (function)


// singletag.addEventListener(evenet name   ,anonymous  function  )

//  function addProduct() {
//    alert("add product");
//  }

//  function deleteProduct(index) {
//    alert(index);
//  }

//  h1.addEventListener("click", function () {
//    alert("hello");

//  });

//  h1.addEventListener('click' , addProduct) ; // has no parameter

//  h1.addEventListener("click", function () {
//    deleteProduct(2);
//    addProduct();
//  }); // has parameter

//  var h1s = document.getElementsByTagName("h1"); //html collection

//  for (var i = 0; i < h1s.length; i++) {
//    h1s[i].addEventListener("click", function () {
//      alert("hi");
//    });
//  }


//  var h1 = document.querySelector('h1');//one tag

//  function test1(){
//      alert('test 1');
//  }
//  function test2(){
//      alert('test 2');
//  }
// h1.onclick=function(){
//     test(3)
// }
// h1.onclick = test1; //property

//  h1.onclick = test2;//override

// h1.addEventListener('click' , addproduct);//method

//  h1.addEventListener('click' , dispalyproduct);//method


// 3-events

//  * 
//click - dblclick - (mouseover - mouseleave) - mousemove

// keyboard events :
// keyup - keydown - keypress -input(when the input changes-IE Version below 9 not support)

// input >>> blur x focus - change(value of input)

// scroll

// dragend 

//  *


// window.addEventListener("scroll", function () {
//   console.log(2);
// });

// input.addEventListener("change", function () {
//   console.log("1");
// });

//  var demo = document.getElementById("demo");

//  var input = document.querySelector("input");

//  input.addEventListener("keyup", function (e) {
//    console.log(e);
//  });

//  demo.addEventListener("click", function (e) {
//    //   console.log(e.clientX,e.clientY); //object contain all details about event
//    //   console.log(e.target); //object contain all details about event
//  });

// 4- change - style inline
//  var demo = document.getElementById("demo");
//  var btn = document.querySelector(".btn"); //one tag
//  var cursor = document.querySelector("img");

// document.addEventListener("mousemove", function (e) {
  // tag.style.propertyname = value;
//   console.log(e.clientX, e.clientY);
//   cursor.style.position = "absolute";
//   cursor.style.top = e.clientY +'px';
//   cursor.style.left = e.clientX + 'px';
// });

//  demo.addEventListener("dragend", function (e) {
//    demo.style.position = "absolute";
//    demo.style.top = e.clientY + "px";
//    demo.style.left = e.clientX + "px";
//    demo.style.transform = "translate(-50% , -50%)";
//  });

// 5-change- atrributes
// <img src="" alt="" class="" id="">
{
  src:;
  alt:;
  id:;
}

// var myanchor = document.getElementById("link");
// var img = document.querySelector("img");
// var h1 = document.querySelector("h1");
// var clickedBtn = document.querySelector("#mybtn");
//  var x = myanchor.class;
//
// {
//     id:
//     src:
//     href:
// }
// console.log()
// var x = myanchor.getAttribute("id");

//   var x = img.getAttribute('src');
//   var x= h1.getAttribute('id');

  // h1.setAttribute('class' , 'text-center');
//  clickedBtn.setAttribute('disabled','true')

//   boolean attributes like required selected 

//  img.addEventListener("click", function () {
//   clickedBtn.removeAttribute("disabled");
// });
//   h1.classList.add("text-center", "text-light");
//   h1.classList.replace("bg-danger", "bg-dark");
//   h1.classList.replace("bg-danger", "bg-dark");
//   h1.classList.remove("bg-danger");
//   h1.classList.toggle("bg-danger");

// });




