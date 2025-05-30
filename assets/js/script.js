$(document).ready(function() {
    $('.hidden-object').on("click", function(){
        const name = $(this).attr('id');
        $(this).hide(); // hide the object
        alert("You found the " + name + "!");
    })
})