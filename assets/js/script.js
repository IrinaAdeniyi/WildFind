/** Create pop-up with details and picture of the animal/plant
 * and make the animal/plant found dissapear once it is clicked on
 */
$(document).ready(function() {
    $('.hidden-object').on("click", function(){
        const name = $(this).attr('id');
        $(this).hide(); 
        alert("You found the " + name + "!");
    })
})

// Cross the name of the animal/plant found
$(document).ready(function(){
    $('#butterfly').on('click', function () {
        // $(this).hide();
        $('#butterfly-check').css('text-decoration', 'line-through');
    })
});

