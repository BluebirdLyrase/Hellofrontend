console.log("App.js Activated");


// function Hello(){
//     alert("Hello");
// }

// function getDom(){
// var name = document.getElementById('name').innerHTML;
// var major = document.getElementById('major').innerHTML;
// console.log(name+major);
// }

// function setDom(){

// document.getElementById('name').innerHTML="sdfsdfsdfsfd";
// document.getElementById('major').innerHTML="12341141";
// }

// function setList(){
//     var list = document.getElementById('Ilist').value;
//     console.log(list);
//     document.getElementById('list').innerHTML+='<li>'+list+'</li>';
//     // $('#list').append('<li>'+list+'</li>');
// }



// function Clear(){
//     console.log('clear');
//     document.getElementById('list').innerHTML='';
//     document.getElementById('name').innerHTML="";
//     document.getElementById('major').innerHTML="";
// }

$(function () {

    $('#Hello').click(function () {
        alert("Hello");
    });

    $('#getDom').click(function () {
        var name = $('#name').html();
        var major = $('#major').html();
        console.log(name + major);
    });

    $('#setDOM').click(function () {
        $('#name').empty();
        $('#major').empty();
        $('#name').append("GRSAW TYTERF");
        $('#major').append("!@#!@$!$!@$");
    });

    $('#setList').click(function () {
    var list = $('#Ilist').val();
    console.log(list);
    $('#list').append('<li>'+list+'</li>');
    });

    $('#Clear').click(function () {
        $('#name').empty();
        $('#major').empty();
        $('#list').empty();
    });



})