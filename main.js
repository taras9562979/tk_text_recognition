var insert_btn = document.getElementById('insert');
var move_btn = document.getElementById('move');
var connect_btn = document.getElementById('connect');
var delete_btn = document.getElementById('delete');
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let mode = 'Empty';

function insert_btn_Clicked(event){
    mode = 'Insert Mode';
    console.log(mode);
}
function move_btn_Clicked(event){
    mode = 'Move Mode';
    console.log(mode);
}
function connect_btn_Clicked(event){
    mode = 'Connect Mode';
    console.log(mode);
}
function delete_btn_Clicked(event){
    mode = 'Delete Mode';
    console.log(mode);
}
function canvas_left_Clicked(event){
    var coordinates = [event.offsetX,event.offsetY];
    var width = 60;
    var height = 30;
    ctx.fillStyle = 'wheat';
    ctx.fillRect(event.offsetX-width/2,event.offsetY-height/2,width,height);
    console.log(coordinates);
}

insert_btn.addEventListener('click',insert_btn_Clicked);
move_btn.addEventListener('click',move_btn_Clicked);
connect_btn.addEventListener('click',connect_btn_Clicked);
delete_btn.addEventListener('click',delete_btn_Clicked);
canvas.addEventListener('click',canvas_left_Clicked);