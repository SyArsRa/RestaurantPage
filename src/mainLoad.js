const content = document.getElementById("content");
export default function loadMain(){
    content.innerHTML = `
    <span class="imgbar">
        <img src="images\\logo.png" class="img" alt="logo"></img>
        <div class="line"></div>
    </span>
    <div class="menuBar">
        <div id="homeBtn">
            Home
        </div>
        <div id="menuBtn">
            Menu
        </div>
        <div id="contactBtn">
            Contact
        </div>
    </div>
    <hr class="bodyBorder">
    `
};