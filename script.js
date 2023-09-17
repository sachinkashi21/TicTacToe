let turn=true;
let count=0;
let obj1={score: 0};
let obj2={score: 0};
let sum1=0;
let sum2=0;

let arr=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
];
let traverse=0;
let st='';

function run(a,b){
    if(turn && arr[a][b]==0){
        arr[a][b]='X';
        update(a,b);
        count++;
        check(a,b,obj1);
        document.getElementById('scoreA').innerHTML="player1: "+obj1.score;
        turn=false;
        if(count >= 9){
            count=0;
            updateTable();
            
        }
        
    }
    else if(!turn && arr[a][b]==0){
        arr[a][b]='O';
        update(a,b);
        count++;
        check(a,b,obj2);
        document.getElementById('scoreB').innerHTML="player2: "+obj2.score;
        turn=true;
        if(count >= 9){
            count=0;
            updateTable();
            
        }
        
    }
    else{
        return;
    }
    
}

function updateTable(){
    var x=document.getElementById('tab').insertRow(1);
    var c1=x.insertCell(0);
    var c2=x.insertCell(1);
    c1.innerHTML=""+obj1.score;
    c2.innerHTML=""+obj2.score;
    sum1+=obj1.score;
    sum2+=obj2.score;
    obj1.score=0;
    obj2.score=0;
}


function update(a,b){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(a==i && b==j){
                if(arr[i][j]=='X'){
                    document.getElementsByClassName('sq')[traverse].innerHTML="X";
                }
                else{
                    document.getElementsByClassName('sq')[traverse].innerHTML= "O";
                }
                traverse++;
            }
            else{
                traverse++;
            }
        }
    }
    traverse=0;
}

function check(a,b,obj){
    let ch=arr[a][b];
    let tot=0;
    //for horizontal
    for(let i=a+1;i<3;i++){
        if(ch==arr[i][b]){
            tot++;
        }
    }
    for(let i=0;i<a;i++){
        if(ch==arr[i][b]){
            tot++
        }
    }
    if(tot==2){
        obj.score=obj.score+(tot/2);
    }
    tot=0;
    //for vertical
    for(let i=b+1;i<3;i++){
        if(ch==arr[a][i]){
            tot++;
        }
    }
    for(let i=0;i<b;i++){
        if(ch==arr[a][i]){
            tot++
        }
    }
    if(tot==2){
        obj.score=obj.score+(tot/2);
    }
    tot=0;
    //for diagonal
    if(a==b){
        for(let i=0;i<3;i++){
            if(arr[i][i]==ch){
                tot++;
            }
        }
        if(tot==3){
            obj.score=obj.score+(tot/3);
        }
        tot=0;
    }
    if(a+b==2){
        for(let i=0;i<3;i++){
            if(arr[i][2-i]==ch){
                tot++;
            }
        }
        if(tot==3){
            obj.score=obj.score+(tot/3);
        }
        tot=0;
    }
}

function restart(){
    arr=[
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    for(let i=0;i<9;i++){
        document.getElementsByClassName('sq')[i].innerHTML='';
    }
}

function end(){
    document.body.style.opacity="50%";
    document.getElementById('gameover').style.visibility="visible";
    
    if(sum1>sum2){
        console.log("1"+" "+sum1);
    }
    else if(sum2>sum1){
        console.log("2"+" "+sum2);
    }
    else{
        console.log("draw"+" "+sum1);
    }
    if(false){
        location.reload();
    }
}