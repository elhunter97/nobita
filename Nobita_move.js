function Up() {
    let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top)-5+'px';
}
function Down() {
    let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top)+5+'px';
}

function left() {
    let element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left)-5+'px';
}

function right() {
    let element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left)+5+'px';
}

function moveSelection(evt){
    switch(evt.keyCode){
        case 37:
            left();
            break;
        case 39:
            right();
            break;
        case 38:
            Up();
            break;
            case 40:
                Down();
                break;
    }
}

function doReady(){
    window.addEventListener("keydown", moveSelection);
}