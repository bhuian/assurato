$(document).ready(function () {
    $(".dropdown-menu").click(function () {
      $(this).toggleClass("show");
    });
  });




  $(document).ready(function () {
    $(".bars").click(function () {
      $(".appbar").toggleClass("show");
      $(".appbar").toggleClass("shadow");
    });
    $(".login-med-header").click(function () {
      $(".login-med-header-btns").toggleClass("show");
    });
    $(".login-med-header-btns ul li").click(function () {
      var medText = $(this).text();
      $(".login-med-select").text(medText);
      $(".login-med-header-btns ul li").removeClass("active");
      $(this).addClass("active");
    });
    $(".login-med-mit-id").click(function () {
      $("#med-mit-id").addClass("show");
      $("#med-e-mail").removeClass("show");
      $("#med-ind").removeClass("show");
    });
    $(".login-med-e-mail").click(function () {
      $("#med-mit-id").removeClass("show");
      $("#med-e-mail").addClass("show");
      $("#med-ind").removeClass("show");
    });
    $(".login-med-ind").click(function () {
      $("#med-mit-id").removeClass("show");
      $("#med-e-mail").removeClass("show");
      $("#med-ind").addClass("show");
    });
    //  top appbar
    $(".mobile-topbar .sub-menu").click(function () {
      $(".mobile-topbar .sub-menu .nav-items").toggleClass("show");
    });
    // hvilken active
    $(".hvilken-items .item").click(function () {
      $(this).toggleClass("active");
    });
    // btn-group-input active
    $(".btn-group-input input").click(function () {
      $(".btn-group-input input").removeClass("active");
      $(this).toggleClass("active");
    });
    // list-of-input active
    $(".list-of-input input").click(function () {
      $(".list-of-input input").removeClass("active");
      $(this).toggleClass("active");
    });
  });
  
  $(document).ready(function () {
    $(".accordion-list > li > .answer").hide();
    $(".accordion-list > li.active > .answer").show();
  
    $(".accordion-list > li .acc-title").click(function () {
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

  $(document).ready(function () {
    $(".close-btn").append('<i class="fa-light fa-xmark"></i>');
    $(".close-btn").click(function () {
        $(this).parents(".modal").hide();
      });
      $(".modal-show").click(function () {
        $('.modal').show();
      });
  });