let currplayer = "X";
let arr = Array(9).fill(null);

function checkwinner(){
    if(
        (arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2])||
        (arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5])||
        (arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8])||
        (arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6])||
        (arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7])||
        (arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8])||
        (arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8])||
        (arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6])
    ){
        setTimeout(() => {
            if(currplayer === 'X') alert(`winner is O`);
            if(currplayer === 'O') alert(`winner is X`);
        }, 0.2*1000);

        setTimeout(() => {
            document.location.reload();
        }, 0.5* 1000);

    }else if(!arr.some((e) => e===null)){
        setTimeout(() => {
            alert(`DRAW!!!`);
        }, 0.2*1000);

        setTimeout(() => {
            document.location.reload();
        }, 0.5*1000);

        return;
    }
}

function handleClick(el) {
    const id = Number(el.id);
    if(arr[id] !== null){
        return;
    }
    arr[id] = currplayer;
    el.innerText = currplayer;
    checkwinner();
    currplayer = currplayer === 'X'?'O':'X'; 

}
