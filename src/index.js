import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import loadMain from "./mainLoad";

home();

function home(){
    loadMain();
    document.getElementById('homeBtn').className = "selected";
    loadHome();
    document.getElementById('menuBtn').addEventListener('click',menu);
    document.getElementById('contactBtn').addEventListener('click',contact);
};

function menu(){
    loadMain();
    document.getElementById('menuBtn').className = "selected"
    loadMenu();
    document.getElementById('homeBtn').addEventListener('click',home);
    document.getElementById('contactBtn').addEventListener('click',contact);
}
function contact(){
    loadMain();
    document.getElementById('contactBtn').className = "selected"
    loadContact();
    document.getElementById('homeBtn').addEventListener('click',home);
    document.getElementById('menuBtn').addEventListener('click',menu);
};

