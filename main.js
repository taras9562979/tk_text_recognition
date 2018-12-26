var Nodes = {
    width: 60,
    height: 30,
    positions: [],
    nodes_color: 'wheat',
    values: [],
    values_color: 'darkgreen',
    values_font: '16px Verdana',
    add_node: function(pos){
        this.positions.push(pos);
        console.log(this.positions);
    },
    add_node_value: function(val){
        this.values.push(val);
        console.log(this.values);
    }
}

var insert_btn = document.getElementById('insert');
var move_btn = document.getElementById('move');
var connect_btn = document.getElementById('connect');
var delete_btn = document.getElementById('delete');
var calculate_btn = document.getElementById('calculate');
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
function calculate_btn_Clicked(event){
    mode = 'Calculate Mode';
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
function draw_Node(event,index,font,color){
    var coordinates = [event.offsetX,event.offsetY];
    ctx.fillRect(event.offsetX-Nodes.width/2,event.offsetY-Nodes.height/2,Nodes.width,Nodes.height);
    Nodes.add_node(coordinates);
    Nodes.add_node_value(Number(get_Value().toFixed(4)));
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.fillText(Nodes.values[index],event.offsetX-Nodes.width*0.45,event.offsetY+Nodes.height*0.135);
}
function canvas_left_Clicked(event){
    if (mode=='Insert Mode'){
        ctx.fillStyle = Nodes.nodes_color;
        var check = false;

        if (Nodes.positions.length==0){
            draw_Node(event,0,Nodes.values_font,Nodes.values_color);
            }
        for (let pos in Nodes.positions){
            if(isIn(event.offsetX,event.offsetY,Nodes.positions[pos][0],Nodes.positions[pos][1],Nodes.width,Nodes.height)) {
                check = true;
            }
        }
        if (check==false){
            draw_Node(event,Nodes.positions.length,Nodes.values_font,Nodes.values_color); 
        }
    }  
    if (mode=='Delete Mode'){

    }
}  

insert_btn.addEventListener('click',insert_btn_Clicked);
move_btn.addEventListener('click',move_btn_Clicked);
connect_btn.addEventListener('click',connect_btn_Clicked);
delete_btn.addEventListener('click',delete_btn_Clicked);
calculate_btn.addEventListener('click',calculate_btn_Clicked);
canvas.addEventListener('click',canvas_left_Clicked);

