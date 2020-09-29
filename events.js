
/* Tools */
function ausgabe(outputStr) {
    console.log(outputStr);
}

/* Events 02*/


/* 
// DOM-Elemente
ausgabe(btn);
ausgabe(item_body);
ausgabe(item_h1);
ausgabe(item_p);*/
let btn = document.getElementById("trigBtn");
let item_body = document.body
let item_h1 = document.body.children[0];
let item_p = document.body.children[1];

/*Event-Handling*/
btn.addEventListener("click", actOnClick);

/* Dispatcher (Wrapper) */
function actOnClick() {
    toggleMode();
}

/* Toggle | Wechselschalter */
function toggleMode(params) {
    if (item_body.className == "night") {
        switchToDay();
    } else {
        switchToNight();
    }
}
/* Night -Mode */
function switchToNight() {
    item_body.className = "night";
    item_h1.className = "night";
    item_p.className = "night";
}

/* Day-Mode */
function switchToDay() {
    item_body.className = "day";
    item_h1.className = "day";
    item_p.className = "day";
}


/* Events 01*/

/* //Testausgabe --> Btn 
ausgabe(document.body.children[2]);
ausgabe(document.getElementsByTagName("button")[0]);
ausgabe(document.getElementById("trigBtn"));
*/

/* Zuordnung der Trigger-Zone (Wo?)*/
//let btn = document.getElementById("trigBtn");
//let btn = document.body;
//ausgabe(btn);

/* Trigger --> Auslöser (Wann/Welches Ereignis?) */ 
/*
btn.addEventListener("click", test_click);
btn.addEventListener("mouseenter", test_rollIn);
btn.addEventListener("mouseleave", test_rollOut);
*/


/* Actions --> (Was) soll passieren? */ 
function test_click() {
    ausgabe("clicked");
}

function test_rollIn() {
    ausgabe("rolled in");
}

function test_rollOut() {
    ausgabe("rolled out");
}





