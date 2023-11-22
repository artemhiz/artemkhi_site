document.querySelector('#istex img').addEventListener('click', istex);
document.querySelector('#istex button').addEventListener('click', istex);

document.querySelector('#nbsite img').addEventListener('click', nbsite);
document.querySelector('#nbsite button').addEventListener('click', nbsite);

document.querySelector('#cookit img').addEventListener('click', cookit);
document.querySelector('#cookit button').addEventListener('click', cookit);

document.querySelector('#todolist img').addEventListener('click', todolist);
document.querySelector('#todolist button').addEventListener('click', todolist);

document.querySelector('#weather img').addEventListener('click', weather);
document.querySelector('#weather button').addEventListener('click', weather);

document.querySelector('#christmas img').addEventListener('click', christmas);
document.querySelector('#christmas button').addEventListener('click', christmas);

document.querySelector('#furniture img').addEventListener('click', furniture);
document.querySelector('#furniture button').addEventListener('click', furniture);

function istex() {
    opensite('http://experience.istanbul/')
}
function nbsite() {
    opensite('https://borisova-jurist.ru/');
}
function cookit() {
    opensite('https://mulberry-faint-governor.glitch.me/');
}
function weather() {
    opensite('https://reflective-guttural-cilantro.glitch.me/');
}
function christmas() {
    opensite('https://holistic-young-innovation.glitch.me/');
}
function todolist() {
    opensite('https://curious-sand-gander.glitch.me/');
}
function furniture() {
    opensite('https://western-detailed-turn.glitch.me/');
}



function opensite(link) {
    window.open(link, '_blank');
}