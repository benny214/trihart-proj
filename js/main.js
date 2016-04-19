$(document).ready(function() {



//fullpage scroll
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage', '7thpage'],
    afterLoad: function(anchorLink, index) {
      if (anchorLink == 'firstPage') {
          $('.section1 h2, .section1 p').addClass("active animated fadeInUp");
          $('.section1 .tags').addClass("active animated fadeIn");
      }
      if (anchorLink == 'secondPage') {
          $('.section2 h2, .section2 p').addClass("active animated fadeInUp");
          $('.section2 .tags').addClass("active animated fadeIn");
      }
      if (anchorLink == '3rdPage') {
          $('.section3 h2, .section3 p').addClass("active animated fadeInUp");
          $('.section3 .tags').addClass("active animated fadeIn");
      }
      if (anchorLink == '4thpage') {
          $('.section4 h2, .section4 p').addClass("active animated fadeInUp");
          $('.section4 .tags').addClass("active animated fadeIn");
      }
      if (anchorLink == '5thpage') {
          $('.section5 h2, .section5 p').addClass("active animated fadeInUp");
          $('.section5 .tags').addClass("active animated fadeIn");
      }
      if (anchorLink == '6thpage') {
          $('.section6 h2, .section6 p').addClass("active animated fadeInUp");
          $('.section6 .tags').addClass("active animated fadeIn");
      }
      if (anchorLink == '7thpage') {
          $('.section7 h2, .section7 p').addClass("active animated fadeInUp");
          $('.section7 .tags').addClass("active animated fadeIn");
      }
    }
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