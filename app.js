console.log("App.js Activated");


function Hello(){
    alert("Hello");
}

function getDom(){
var name = document.getElementById('name').innerHTML;
var major = document.getElementById('major').innerHTML;
console.log(name+major);
}

function setDom(){
    $('#name').empty();
    $('#major').empty();
$('#name').append("GRSAW TYTERF");
$('#major').append("!@#!@$!$!@$");

}

function setList(){
    var list = document.getElementById('Ilist').value;
    console.log(list);
    $('#list').append('<li>'+list+'</li>');
}