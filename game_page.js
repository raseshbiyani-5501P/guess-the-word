player1name = localStorage.getItem("player1_name");
player2name = localStorage.getItem("player2_name");

player1score = 0;
player2score = 0;

document.getElementById("p1name").innerHTML = player1name + " : ";
document.getElementById("p2name").innerHTML = player2name + " : ";

document.getElementById("p1score").innerHTML = player1score;
document.getElementById("p2score").innerHTML = player2score;

document.getElementById("qturn").innerHTML = " Question Turn - " + player1name ;
document.getElementById("aturn").innerHTML = " Answer Turn - " + player2name;

function sendR(){

g_word = document.getElementById("word").value;
n_word = g_word.toLowerCase();
console.log(n_word);

var c1 = n_word.charAt(1);
var l = Math.floor(n_word.lenght/2);
c2 = n_word.charAt(l);
var l1 = n_word.lenght - 1;
c3 = n_word.charAt(l1);

r1 = n_word.replace(c1 , " _ ");
r2 = r1.replace(c2 , " _ ");
r3 = r2.replace(c3 , " _ ");

console.log(r3);

qword = "<h4> Q. "+ r3 +" </h4>";
aword = "<br> A. <input id='ans'>";
c_button = "<br> <br><button class='btn btn-info' onclick='check()'> Check </button>";

row = qword + aword + c_button;
document.getElementById("output").innerHTML =  row;

document.getElementById("word").value = " ";


}

Q_turn = "1";
A_turn = "2";

function check(){

ga = document.getElementById("ans").value;
ANS = ga.toLowerCase();

if(ANS == n_word){

if(A_turn =="1"){   

player1score = player1score + 1;
document.getElementById("p1score").innerHTML= player1score;

}
else{

player2score = player2score + 1;
document.getElementById("p2score").innerHTML = player2score;

}

}

if(Q_turn=="1"){

Q_turn = "2";
document.getElementById("qturn").innerHTML= "Question turn - " + player2name;

}

else{

Q_turn = "1";
document.getElementById("qturn").innerHTML = "Question turn - " + player2name; 
}

if(A_turn == "1")
{

A_turn = "2"
document.getElementById("aturn").innerHTML= "Answer turn -  " + player2name;

}
else{

    A_turn = "1";
    document.getElementById("aturn").innerHTML= "Answer turn - " + player1name;

}

document.getElementById("output").innerHTML = "";

}