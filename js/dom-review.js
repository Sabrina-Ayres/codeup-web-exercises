
// $(".card").click(function() {
//     $(this).css("background-color", "pink");
// });

///////////////////////////////////////

// $(".card").click(function() {
//     $(this).toggleClass("zebra");
// });

////////////////////////////

// let hoverIn = function(){
//     $(this).toggleClass("zebra");
// };
//
// $(".card").hover(hoverIn);

////////////////////////////////

// let hoverIn = function(){
//     $(this).css({
//         backgroundColor: "black",
//         color: "white"
//     });
// };

// let hoverOut = function(){
//     $(this).css({
//         backgroundColor: "",
//         color: ""
//     });
// };

// $(".card").hover(hoverIn, hoverOut);

////////////////////////////

//change text

// $(".list-group>li").dblclick(function() {
//     $(this).text("Double Clicked!");
//     $(this).click(function(){
//         $(this).text("back again");
//     })
// });

/////////////////////////////////////


//to change an attribute

// $("img").click(function() {
//     $("this").attr("src", "img/whatever");
//     $(this).attr("alt", "Some description");
// });


///////////////////////////////////////

//reload a page
//concole log to make sure it worked with something random in it...

// $('#submitBtn').click(function(){
//     location.reload();
// })


//different url

// $('#submitBtn').click(function(){
//     window.location.replace("newurlthang");
// })






///////////////////////////////probably not important
// new element

//get the data
//
// function getInputData(){
//     let first = $("#first").val();
//     let last = $("#last").val();
//     let handleField = $("#handleField").val();
//
//     return {
//        id: 4, firstName: first, lastName: last, handleField: handleField
//     };
// }
//
// $("#submitBtn").click(function() {
//     console.log(getInputData());
//
//     //get the data
//
//     let inputData = getInputData();
//
//     //create the element that match the html
//
//     let cellCount = $('tr').first().children().length;
//     console.log(cellCount);
//
//     let tableRow = $("<tr></tr>");
//
//
//     for(let i = 1; i <= cellCount; i++){
//         let tableData = $("<td></td>");
//         tableRow.append(tableData);
//
//     }
//
// });




