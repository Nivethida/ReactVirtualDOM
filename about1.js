var targetDoe= document.getElementById("doe");
var countDoe = 0;
function countdoe() {
    var txt = "<p>Counter: "+ countDoe++ + "</p>"+ "<p>Fin</p>";
    targetDoe.innerHTML=txt;
}
setInterval(countdoe,1000);