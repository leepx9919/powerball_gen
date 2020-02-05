

function Random_1(){
  var x=Math.floor(Math.random()*69+1);
  document.getElementById('test').value=x;
  document.getElementsByClassName("circle")[0].innerHTML=x;
}
function Random_2(){
  var x=Math.floor(Math.random()*69+1);
  document.getElementById('test').value=x;
  document.getElementsByClassName("circle")[1].innerHTML=x;
}
function Random_3(){
  var x=Math.floor(Math.random()*69+1);
  document.getElementById('test').value=x;
  document.getElementsByClassName("circle")[2].innerHTML=x;
}
function Random_4(){
  var x=Math.floor(Math.random()*69+1);
  document.getElementById('test').value=x;
  document.getElementsByClassName("circle")[3].innerHTML=x;
}
function Random_5(){
  var x=Math.floor(Math.random()*69+1);
  document.getElementById('test').value=x;
  document.getElementsByClassName("circle")[4].innerHTML=x;
}
function RandomRed(){
  var x=Math.floor(Math.random()*26+1);
  document.getElementById('test').value=x;
  document.getElementsByClassName("circle")[5].innerHTML=x;
}
function Random(){
  Random_1();
  Random_2()
  Random_3();
  Random_4()
  Random_5()
  RandomRed();
}
