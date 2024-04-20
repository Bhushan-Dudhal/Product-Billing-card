function incre1() {
  var n = document.getElementById("inp1").value;
  n++;
  document.getElementById("inp1").value = n;
  document.getElementById("total1").value = n * 200;
}
function decre1() {
  var n = document.getElementById("inp1").value;
  n--;
  document.getElementById("inp1").value = n;
  document.getElementById("total1").value = n * 200;
}

function incre2() {
  var n = document.getElementById("inp2").value;
  n++;
  document.getElementById("inp2").value = n;
  document.getElementById("total2").value = n * 300;
}

function decre2() {
  var n = document.getElementById("inp2").value;
  n--;
  document.getElementById("inp2").value = n;
  document.getElementById("total2").value = n * 300;
}

function incre3() {
  var n = document.getElementById("inp3").value;
  n++;
  document.getElementById("inp3").value = n;
  document.getElementById("total3").value = n * 1000;
}
function decre3() {
  var n = document.getElementById("inp3").value;
  n--;
  document.getElementById("inp3").value = n;
  document.getElementById("total3").value = n * 1000;
}

function incre4() {
  var n = document.getElementById("inp4").value;
  n++;
  document.getElementById("inp4").value = n;
  document.getElementById("total4").value = n * 500;
}
function decre4() {
  var n = document.getElementById("inp4").value;
  n--;
  document.getElementById("inp4").value = n;
  var a = (document.getElementById("total4").value = n * 500);
  console.log(a);
}

function total5() {
  var a = Number(document.getElementById("total1").value);
  var b = Number(document.getElementById("total2").value);
  var c = Number(document.getElementById("total3").value);
  var d = Number(document.getElementById("total4").value);

  e = a + b + c + d;

  document.getElementById("inp5").value = e;
}
