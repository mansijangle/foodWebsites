function displaycolor(){
    document.body.style.backgroundColor =' rgb(179, 238, 240)';
}
function keydown(){
    document.frm1.name1.style.backgroundColor ='rgb(100,300,300)';
}
function keyup(){
    document.frm1.name1.style.backgroundColor = ' rgb(179, 238, 240)';
}
function keypress(){
    document.frm1.name1.style.backgroundColor = ' rgb(179, 238, 240)';
}

function down(){
    document.frm1.name2.style.backgroundColor ='rgb(100,300,300)';
}
function up(){
    document.frm1.name2.style.backgroundColor = ' rgb(179, 238, 240)';
}
function press(){
    document.frm1.name2.style.backgroundColor = ' rgb(179, 238, 240)';
}
function d(){
    document.frm1.name3.style.backgroundColor ='rgb(100,300,300)';
}
function u(){
    document.frm1.name3.style.backgroundColor = ' rgb(179, 238, 240)';
}
function p(){
    document.frm1.name3.style.backgroundColor = ' rgb(179, 238, 240)';
}

function btnclick(){
 var i = confirm("do you want to submit");
 if(i===true){
   alert("Successfully login");
 }
 else{
    alert("can't access to another informationss");
 }
}