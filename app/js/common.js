particlesJS.load('particles', 'js/config.json', function() {
    console.log('callback - particles.js config loaded');
});

$(function() {
    $("body").niceScroll({
        cursorcolor: '#eaeaea',
        cursorwidth: '6px',
        cursorborder: 'none',
        cursorborderradius: '0'
    });
});