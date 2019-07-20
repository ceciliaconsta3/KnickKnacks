
// switch between classes in nav
window.addEventListener("load", function() {
    console.log("all assets loaded");
    newFunction();
    animateNavScroll();
    console.log("newFunction called");
});

function newFunction() {
    $('nav a').click(function() {         
        $(this).addClass('activated-item').siblings().removeClass('activated-item'); 
        console.log("new function fired");          
});
}

// add animation transition for the nav class switch
function animateNavScroll() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {
    
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
}