function myFunction() {
    document.getElementById("name-change").innerText = "John Doe";
}

function editFun(){
    document.getElementById("edit-r").innerHTML;
}

function approvea(_element) {
    var x = document.querySelector("#todd");
    x.parentElement.removeChild(x);
    document.getElementById("nconnects").innerText += 1;
    document.getElementById("pending-c").innerText -= 1 ;
}
function approveb(_element) {
    var y = document.querySelector("#phil");
    y.parentElement.removeChild(y);
    document.getElementById("nconnects").innerText += 1;
    document.getElementById("pending-c").innerText -= 1;
}
function denya(_element) {
    var w = document.querySelector("#todd");
    w.parentElement.removeChild(w);
    document.getElementById("pending-c").innerText -= 1;
}
function denyb(_element) {
    var z = document.querySelector("#phil");
    z.parentElement.removeChild(z);
    document.getElementById("pending-c").innerText -= 1;
}