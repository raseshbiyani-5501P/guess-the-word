function add_user(){

var PN_1 = document.getElementById("player1_name").value;
var PN_2 = document.getElementById("player2_name").value;

localStorage.setItem("player1_name", PN_1);
localStorage.setItem("player2_name" , PN_2);

window.location = "game_page.html";
}