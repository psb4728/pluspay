$(document).ready(function(){

  // gnb menu
  $('.gnb').on({
    mouseenter: function(){
      $(this).addClass('active');
      $('#layer').addClass('active');
      $('#header').addClass('drop');
      $('#header').find('.depth').stop().fadeIn(700);
    },
    mouseleave: function(){
      $(this).removeClass('active');
      $('#layer').removeClass('active');
      $('#header').removeClass('drop');
      $('#header').find('.depth').stop().hide()
    }
  });

  $('.gnb li').on({
    mouseenter: function(){
      $(this).addClass('active');
    },
    mouseleave: function(){
      $(this).removeClass('active');
    }
  });

  
  // hamburger menu button
  $('.menu_btn').click(function(){
    $(this).toggleClass('open');
    $('.ham_nav').toggleClass('open');
    $('body').toggleClass('overflow');
  });


  // faq accordion
  $('.faq_content .row li').on('click',function(){
    $('.faq_content .row .reply').stop().slideUp();

    if($(this).parent('.row').hasClass('active') == false){
      $('.faq_content .row').removeClass('active');
      $(this).parent('.row').addClass('active');
      $(this).parent('.row').find('.reply').stop().slideDown();
    } else {
      $(this).parent('.row').removeClass('active');
      $('.faq_content .row .reply').stop().slideUp();
    }
  });

  // 자동 하이픈
  $(".tel").on("keyup", function() { 
    $(this).val( $(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-") ); 
  });

});


// 스크롤 이벤트
const scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};
const elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {
  Array.prototype.forEach.call(elementsToShow, function(element){
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      // element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

loop();

function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  const rect = el.getBoundingClientRect();
  return (
    (rect.top <= 800
      && rect.bottom >= 800)
    ||
    (rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top >= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 800 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

