let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

let bgContainerEl = document.getElementById("bgContainer");


function buttonEl() {
    let val = Math.ceil(Math.random() * 10) - 1;
    bgContainerEl.style.backgroundColor = bgColorsArray[val];
    val = 0;
}