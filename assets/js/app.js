
$(document).ready(function() {
  $(".bars").click(function(){
    $(".appbar").toggleClass("show");
  });
  $(".login-med-header").click(function(){
    $(".login-med-header-btns").toggleClass("show");
  });
  $(".login-med-header-btns ul li").click(function () {
      var medText=$(this).text();  
      $('.login-med-select').text(medText);
      $(".login-med-header-btns ul li").removeClass("active");
      $(this).addClass("active");  
  });
   $('.login-med-mit-id').click(function(){
    $('#med-mit-id').addClass('show');
    $('#med-e-mail').removeClass('show');
    $('#med-ind').removeClass('show');
   })
   $('.login-med-e-mail').click(function(){
    $('#med-mit-id').removeClass('show');
    $('#med-e-mail').addClass('show');
    $('#med-ind').removeClass('show');
   })
   $('.login-med-ind').click(function(){
    $('#med-mit-id').removeClass('show');
    $('#med-e-mail').removeClass('show');
    $('#med-ind').addClass('show');
   })
  });



  // 
  $(document).ready(function(){
    $('.accordion-list > li > .answer').hide();
    $('.accordion-list > li.active > .answer').show();
      
    $('.accordion-list > li').click(function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active").find(".answer").slideUp();
      } else {
        $(".accordion-list > li.active .answer").slideUp();
        $(".accordion-list > li.active").removeClass("active");
        $(this).addClass("active").find(".answer").slideDown();
      }
      return false;
    });
    
  });