$(document).ready(function() {



//fullpage scroll
  $('#fullpage').fullpage({
    afterLoad:function(anchorLink, index){
      if(index == 2){
        $('.section h2, .section p').addClass("active animated fadeInUp");
      }
    },
    // afterLoad:function(index){
    //   if (index == 3 ){
    //     $('.section h2, .section p').addClass("active animated fadeInUp");
    //   }
    // }
  });
  $(document).on('click', '#moveDown', function(){
    $.fn.fullpage.moveSectionDown();
  });

//fullpage menu
  $('#toggle').click(function() {
    $('.animation_wrap').removeClass('animated slideOutUp');
    $('#overlay').addClass('open');
    $('.animation_wrap').addClass('animated slideInDown');
  });
  $('.close_nav').click(function() {
    $('.animation_wrap').removeClass('animated slideInDown');
    $('.animation_wrap').addClass('animated slideOutUp');
    $('#overlay').removeClass('open');
  });

    // Nav Side-Slide
  $('.grid_opn').click(function() {
    $('.grid_nav').animate({right: "0px"}, 300);
  });
  
  $('.grid_close').click(function() {
    $('.grid_nav').animate({right: "-69.375rem"}, 300);
  });






});

$(window).load(function() {

  $(".loader_inner").fadeOut();
  $(".loader").delay(400).fadeOut("slow");

  $(".main h1").addClass("animated fadeInUp");
  $(".main p").addClass("animated fadeInUp");

  $(".prod_page_wrap h2").addClass("animated fadeInUp");
  $(".prod_page_wrap .prod_img").addClass("animated fadeInUp");
  $(".prod_page_wrap .tags").addClass("animated fadeIn");

  $(".about_page_wrap h2").addClass("animated fadeInUp");
  $(".about_page_wrap p").addClass("animated fadeInUp");

}); 