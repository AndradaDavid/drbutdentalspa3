$(function() {
    $('.expanded-info').on('click', function (event) {
        $('#mySmallModalLabel').modal({
            keyboard: false
        });
        //event.preventDefault();
        //console.log('expanded');
        //$('.expanded-wrapper').show();
        $('html').addClass('fixed');
    });
});