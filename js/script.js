var $ = jQuery;

$(function() {
  $('a[href*="#"]:not([href="#"]):not([href="#carousel-example-generic"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
});

// test: accordion v2
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// button hover-over failed
// $('.btn a').mouseover(function(){
//   $( this ).click();
// });
// $('.btn a').mouseout(function(){
//   $( this ).click();
// });

// hidden click works, but code not used
// function toggleImage() {
//   $(".hiddenclickimg").toggle();
// };