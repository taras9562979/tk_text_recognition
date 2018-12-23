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

insert_btn.addEventListener('click',insert_btn_Clicked);
move_btn.addEventListener('click',move_btn_Clicked);
connect_btn.addEventListener('click',connect_btn_Clicked);
delete_btn.addEventListener('click',delete_btn_Clicked);