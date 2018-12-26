var Nodes = {
    width: 60,
    height: 30,
    positions: [],
    values: [],
    add_node: function(pos){
        this.positions.push(pos);
    }
}

var insert_btn = document.getElementById('insert');
var move_btn = document.getElementById('move');
var connect_btn = document.getElementById('connect');
var delete_btn = document.getElementById('delete');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var mode = 'Empty';

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
function isIn(ex,ey,x,y,w,h){
    conditionX = (ex<=x+w)&&(ex>=x-w);
    conditionY = (ey<=y+h)&&(ey>=y-h);
    condition = conditionX&&conditionY;
    return condition;
}
function get_Value(){
    var rnd_min = 0.0001;
    var rnd_max = 1;
    var res = (rnd_min+Math.random()*(rnd_max-rnd_min));
    return res;
}
function canvas_left_Clicked(event){
    if (mode=='Insert Mode'){
        var coordinates = [event.offsetX,event.offsetY];
        ctx.fillStyle = 'wheat';
        var check = false;

        if (Nodes.positions.length==0){
            ctx.fillRect(event.offsetX-Nodes.width/2,event.offsetY-Nodes.height/2,Nodes.width,Nodes.height);
            Nodes.add_node(coordinates);
            console.log(Nodes.positions);
            Nodes.values.push(get_Value().toFixed(4));
            console.log(Nodes.values);
            str_value = Nodes.values[0];
            console.log(str_value);
            ctx.font = "16px Georgia";
            ctx.fillStyle = 'brown';
            ctx.fillText(str_value,event.offsetX-Nodes.width*0.4,event.offsetY+Nodes.height/8);
            }
        for (let pos in Nodes.positions){
            if(isIn(event.offsetX,event.offsetY,Nodes.positions[pos][0],Nodes.positions[pos][1],Nodes.width,Nodes.height)) {
                check = true;
            }
        }
        if (check==false){
            ctx.fillRect(event.offsetX-Nodes.width/2,event.offsetY-Nodes.height/2,Nodes.width,Nodes.height);
            Nodes.add_node(coordinates);
            console.log(Nodes.positions);
        }

    }  
    if (mode=='Delete Mode'){

    }
}  

insert_btn.addEventListener('click',insert_btn_Clicked);
move_btn.addEventListener('click',move_btn_Clicked);
connect_btn.addEventListener('click',connect_btn_Clicked);
delete_btn.addEventListener('click',delete_btn_Clicked);
canvas.addEventListener('click',canvas_left_Clicked);