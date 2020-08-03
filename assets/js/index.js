//Made a click function to toggle a class on li's and future li's
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
});

//Click function to delete/fadeout li's
$('ul').on('click', 'span', function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
});

//function to create new li with user input on keypress === enter
$("#userInput").keypress(function(event){
    if(event.which === 13){
        //grabbing newTodo from input
        var newTodo = $(this).val();
        //input after newTodo has been entered
        $(this).val('');
        //create new li from newTodo
        $('ul').append(`<li><span><i class="fas fa-trash-alt"></i></span> ${newTodo}</li>`);
    }
});

$(".fa-plus").click(function(){
    $('input').fadeToggle();
})