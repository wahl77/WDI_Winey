$(document).ready(function(){
  var all_images = $('ul#images li img');
  var length = all_images.length
  var counter = 0
  var x = setInterval(function(){next_image();}, 5000);

  $("body").on("click", function(){
    show_image((++counter % all_images.length));
  });

  var show_image = function(index){
    a = $('ul#images li img[style*="block"]')
    a.fadeOut(1000);
    a.css("display", "none");
    all_images.eq(index).fadeIn(1000).css("display", "block");;
  }


  var next_image = function(){
    show_image(++counter % all_images.length);
  }


});
