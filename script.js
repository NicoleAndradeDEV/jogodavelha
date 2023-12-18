const play = document.querySelector(".player");

let selected;
let jogador = "X";

let positions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

function incial( ) {
    selected = [ ];

    play.textContent  = `é a vez do: ${jogador}` ;

    document.querySelectorAll(".velha button").forEach((item) =>{ 
        item.innerHTML = " ";
        item.addEventListener ("click",  newMove);
    });
}

incial();

function newMove(e) {
    const jogodavelha = e.target.getAttribute("data-i");
    e.target.innerHTML = jogador;
    e.target.removeEventListener("click", newMove);
    selected[jogodavelha] = jogador;

    setTimeout(() => {
        check();
    }, [100]);

    jogador = jogador === "X" ? "O" : "X";
 play.innerHTML = `é a vez do : ${jogador}` ;
}

function check(){
    let ultimoMove =jogador === "X" ? "O" : "X";

    const items = selected
    .map((item, i) => [item, i ])
    .filter((item) => item[0] === ultimoMove)
    .map ((item) => item [1]);


for (pos of positions) {
    if (pos.every((item)=> items.includes(item))){
        alert("O jogador'" + ultimoMove + " 'Ganhou!");
        incial();
        return;
    }
}

if(selected.filter((item)=> item).length === 9) {
    alert ("Empate");
    incial();
    return;
}
}