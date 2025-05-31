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
        $(this).hide();
        $('#butterfly-check .cross-text').css('text-decoration', 'line-through');
    })

    $('#frog').on('click', function () {
        $(this).hide();
        $('#frog-check .cross-text').css('text-decoration', 'line-through');
    })

    $('#snake').on('click', function () {
        $(this).hide();
        $('#snake-check .cross-text').css('text-decoration', 'line-through');
    })

    $('#orchid').on('click', function () {
        $(this).hide();
        $('#orchid-check .cross-text').css('text-decoration', 'line-through');
    })

    $('#monkey').on('click', function () {
        $(this).hide();
        $('#monkey-check .cross-text').css('text-decoration', 'line-through');
    })
});

