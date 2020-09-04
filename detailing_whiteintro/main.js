  // поп-апы
   $(document).ready(function() {
         	$(".popup-link").magnificPopup({type:'inline'});
      });
   // навигация   
      
    $( document ).ready(function() {
          $("#ceramica_id1").click();  
        });
        $(".nav_wrapper-keramic a").on("click", function(e){
  event.preventDefault();
  var link =  $(this).attr ('href');
  $("html, body").animate({ scrollTop: $(link).offset().top }, 1000);
});

// маска

$("input[type='phone']").inputmask("+7-999-999-99-99");
$("input[type='tel']").inputmask("+7-999-999-99-99");

// свайп меню

  $(".nav-wrapper").swipe({
 swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
 console.log(direction);
 if (direction == 'left') {
                $('.menu_close').click();
            }
 }
});


//хедер - скролл 
    if(window.matchMedia('(min-width: 1200px)').matches){
     $(window).on("scroll", function(){
   if($(window).scrollTop() > 1) {
       $(".main_header").addClass("active");
       $(".flipbox .back").addClass("activex");
        $(".flipbox .front").addClass("activex");
   }else{
       $(".main_header").removeClass("active");
        $(".flipbox .back").removeClass("activex");
         $(".flipbox .front").removeClass("activex");
   }
});
}
//хедер меню
  $('.menus').on('click', function() {
    $('.nav-wrapper').toggleClass('active');
    $('.nav-empty').toggleClass('active');
    $('body').toggleClass('menu_active');
    
    return false;
  });
   $('.nav-empty').on('click', function() {
       console.log("asd");
  $('.nav-wrapper').toggleClass('active');
    $('.nav-empty').toggleClass('active');
    $('body').toggleClass('menu_active');
  });
   $('.menu_close').on('click', function() {
    $('.nav-wrapper').toggleClass('active');
    $('.nav-empty').toggleClass('active');
    $('body').toggleClass('menu_active');
    
    return false;
  });

// слайдеры 
//fullwidth - polirovka-slider
 $(' .polirovka-slider-arrow_prev').click(function () {
            $('.polirovka-slider .row').slick('slickPrev');
        })

        $('.polirovka-slider-arrow_next').click(function () {
            $('.polirovka-slider .row').slick('slickNext');
        })
         $('.polirovka-slider .row').slick({
                slidesToShow: 5,
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                autoplay: true,
                lazyLoad: 'ondemand',
                dots: false,
                autoplaySpeed: 1500,
                rows: 1,
                responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3


                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
            
             if (window.matchMedia('(max-width: 768px)').matches) {
            $('.etapi_mob-slider').slick({
                slidesToShow: 1,
                arrows: false,
                dots: false,
                rows: 1
            });
        }
        $('.modern_quipment-slider').slick({
            slidesToShow: 3,
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 1500,
            rows: 1
        });
        $(' .etapi-slider-arrow_prev').click(function () {
            $('.etapi_mob-slider').slick('slickPrev');
        })

        $('.etapi-slider-arrow_next').click(function () {
            $('.etapi_mob-slider').slick('slickNext');
        })
        $(' .modern-slider-arrow_prev').click(function () {
            $('.modern_quipment-slider').slick('slickPrev');
        })

        $('.modern-slider-arrow_next').click(function () {
            $('.modern_quipment-slider').slick('slickNext');
        })
          if (window.matchMedia('(max-width: 768px)').matches) {
            $('.etapi_mob-slider').slick({
                slidesToShow: 1,
                arrows: false,
                dots: false,
                rows: 1
            });
        }
    
  
   