
// $(document).ready(function () {
//     alert("The DOM has finished loading.")
// })
//
// var contents = $('#mid').html();
// alert(contents)

// $('.codeup').css('border', '1px solid red');

// $('li').css('font-size', '20px');
//
// var contents = $('h1').html();
// alert(contents)
//
// $('h1, p, li').css('background-color', 'pink');


let changeTitle = $('.title');
    let handler = function(event){
        $(this).css('background-color', 'pink');
    }
    changeTitle.click(handler);


let changeFont = $('p');
    let handle = function(e) {
        $(this).css('font-size', '18px');
    }
    changeFont.dblclick(handle);


let changeLine = $('li');
    let mouse = function(e) {
        changeLine.css('color', '');
        $(this).css('color', 'red')
    }
    changeLine.hover(mouse);