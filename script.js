$(document).ready(function() {
    console.log('jQuery is working')
    $('.panel').each(function() {
        console.log($(this))
        $(this).click(function(){
            $('.panel').removeClass('active')
            $(this).addClass('active')
        })
    })
    
})
