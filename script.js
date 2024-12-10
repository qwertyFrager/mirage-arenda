$(document).ready(function(){
    $('.my-slider').slick({
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('#prev'),
        nextArrow: $('#next'),
    });

    $('#inputPhone').mask("+7 (999) 999-9999");

    jQuery('.input-button').click( function(){
        let form = jQuery(this).closest('form');

        if(form.valid()) {
            var acturl = form.attr('action')

            jQuery.ajax({
                url: acturl,
                type: 'post',
                dataType: 'html',
                data: form.serialize(),
                success: function (data) {
                    console.log('success')
                },
                error: function () {
                    console.log('error')
                }
            });
        }
    });
});

$(window).on("load", function() {
    $('body').css({'opacity':'100'});
    PopUpHide('#popup1');
    PopUpHide('#popup2');
    PopUpHide('#popup3');
    PopUpHide('#popup4');
    PopUpHide('#popup5');
    PopUpHide('#popup6');
    PopUpHide('#popup7');
    PopUpHide('#popup8');
    PopUpHide('#popup9');
    PopUpHide('#popup10');
});

$(function(){
    $('a[href*=\\#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 500);//скорость прокрутки
                return false;
            }
        }
    });
});

function PopUpShow(id){
    $(id).show();
}
function PopUpHide(id){
    $(id).hide();
}
