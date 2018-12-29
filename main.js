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

var Hiddens = {
    width: 60,
    height: 30,
    positions: [],
    hidens_color: 'violet',
    values: [],
    values_color: 'darkgreen',
    values_font: '16px Verdana',
    add_hidden: function(pos){
        this.positions.push(pos);
        console.log(this.positions);
    },
    add_hidden_value: function(val){
        this.values.push(val);
        console.log(this.values);
    }
}

var Arrows = {
    arrows_color: 'red',
    starts: [],
    ends: [],
    start_end_pairs: [],
    weights: [],
    add_pair: function(){
        for(let i=0;i<this.ends.length;i++){
            this.start_end_pairs[i] = [ Number(this.starts[i]),Number(this.ends[i]) ];
            }
        return this.start_end_pairs;
    },
    filter_pair: function(){
        for(let i=this.start_end_pairs.length-1;i>=0;i--){
            let temp = this.start_end_pairs[i];
            for(let j=0;j<i;j++){
                let first = this.start_end_pairs[j][0]==temp[0];
                let second = this.start_end_pairs[j][1]==temp[1];
                if(first && second) {
                    this.start_end_pairs.splice(i,1);
                }
            }
        }
        return this.start_end_pairs;
    }
}

var insert_input_btn = document.getElementById('insert-input');
var insert_hidden_btn = document.getElementById('insert-hidden');
var move_btn = document.getElementById('move');
var connect_btn = document.getElementById('connect');
var delete_btn = document.getElementById('delete');
var calculate_btn = document.getElementById('calculate');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var mode = 'Empty';

function insert_input_btn_Clicked(event){
    mode = 'Insert Input Node';
    console.log(mode);
}
function insert_hidden_btn_Clicked(event){
    mode = 'Insert Hidden Node';
    console.log(mode);
}
function move_btn_Clicked(event){
    mode = 'Move Mode';
    console.log(mode);
}
function connect_btn_Clicked(event){
    mode = 'Connect Mode: choose Input Node';
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
function draw_Hidden_Node(event){
    var coordinates = [event.offsetX,event.offsetY];
    ctx.fillRect(event.offsetX-Nodes.width/2,event.offsetY-Nodes.height/2,Nodes.width,Nodes.height);
    Hiddens.add_hidden(coordinates);
}

function canvas_left_Clicked(event){
    if (mode=='Insert Input Node'){
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
    if (mode=='Insert Hidden Node'){
        ctx.fillStyle = Hiddens.hidens_color;
        var check = false;
        if (Hiddens.positions.length==0){
            draw_Hidden_Node(event);
            }
        for (let pos in Hiddens.positions){
            if(isIn(event.offsetX,event.offsetY,Hiddens.positions[pos][0],Hiddens.positions[pos][1],Hiddens.width,Hiddens.height)) {
                check = true;
            }
        }
        if (check==false){
            draw_Hidden_Node(event); 
        }
    }
    if (mode=='Connect Mode: choose Input Node'){
        var check = false;
        for(let pos in Nodes.positions){
            if(isIn(event.offsetX,event.offsetY,Nodes.positions[pos][0],Nodes.positions[pos][1],Nodes.width,Nodes.height)) {
                check = true;
                Arrows.starts.push(pos);
                //console.log('Input Node ',pos,' is selected');
                mode = 'Connect Mode: choose Hidden Node';
                console.log(mode);
            }
        }
    }
    if (mode=='Connect Mode: choose Hidden Node'){
        for(let pos in Hiddens.positions){
            if(isIn(event.offsetX,event.offsetY,Hiddens.positions[pos][0],Hiddens.positions[pos][1],Hiddens.width,Hiddens.height)){
                Arrows.ends.push(pos);
                //console.log('Hidden Node ',pos,' is selected');
                Arrows.add_pair();
                console.log(Arrows.filter_pair());
                mode = 'Connect Mode: choose Input Node';
                console.log(mode);
            }
        }
        
    }
}  

insert_input_btn.addEventListener('click',insert_input_btn_Clicked);
insert_hidden_btn.addEventListener('click',insert_hidden_btn_Clicked);
move_btn.addEventListener('click',move_btn_Clicked);
connect_btn.addEventListener('click',connect_btn_Clicked);
delete_btn.addEventListener('click',delete_btn_Clicked);
calculate_btn.addEventListener('click',calculate_btn_Clicked);
canvas.addEventListener('click',canvas_left_Clicked);

