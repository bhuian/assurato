$(document).ready(function() {
  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('.appbar').addClass('sticky')
    } else{
        $('.appbar').removeClass('sticky')
    }
  });
  
  $(".bars").click(function(){
    $(".appbar").toggleClass("show");
    $(".appbar").toggleClass("shadow");
  });
  // topbar
  $(".mobile-topbar .sub-menu").click(function () {
    $(this).children(".nav-items").toggleClass("show");
  });
  // hvilken active
  $(".hvilken-items .item").click(function(){
    $(this).toggleClass("active");
  });
  // btn-group-input active
  $(".btn-group-input input").click(function(){
    $(".btn-group-input input").removeClass("active")
    $(this).toggleClass("active");
  });
  // list-of-input active
  $(".list-of-input input").click(function(){
    $(".list-of-input input").removeClass("active")
    $(this).toggleClass("active");
  });
  });

  $(document).ready(function(){
    $('.accordion-list > li > .answer').hide();
    $('.accordion-list > li.active > .answer').show();
      
    $('.accordion-list > li .acc-title').click(function() {
      if ($(this).parent().hasClass("active")) {
        $(this).parent().removeClass("active").find(".answer").slideUp();
      } else {
        $(".accordion-list > li.active .answer").slideUp();
        $(".accordion-list > li.active").removeClass("active");
        $(this).parent().addClass("active").find(".answer").slideDown();
      }
      return false;
    });
    
  });
