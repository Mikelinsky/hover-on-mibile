// var swiper = new Swiper('.swiper-container', {
//   nextButton: '.swiper-button-next',
//   prevButton: '.swiper-button-prev',
//   paginationClickable: true,
//   spaceBetween: 0,
//   autoplay: 2500,
//   loop: true
// });



// $(document).ready(function() {
//   $('#company-data-btn a').click(function() {
//     $('#company-data').toggle();
//   })
// });


// NEW MENU VIEW
$(document).ready(function() {


  if ($(window).width() <= 991) {
    $(".navbar-nav li.dropdown").removeClass("nomobiledropdownhover");
  } else {
    $(".navbar-nav li.dropdown").addClass("nomobiledropdownhover");

  }

  mmenu();
  // menu_height();


});

$(window).resize(function() {


  if ($(window).width() <= 991) {
    $(".navbar-nav li.dropdown").removeClass("nomobiledropdownhover");
  } else {
    $(".navbar-nav li.dropdown").addClass("nomobiledropdownhover");
  }

  $('.mega-dropdown').each(function(){
    $(this).removeClass('open ');
  });

  // menu_height();

});


var opmenu = 0;
function mmenu() {

  $('.dropdown-toggle').on('click', function(e) {

        if ($(this).closest('.dropdown').hasClass('nomobiledropdownhover')) {

          $(this).closest('.dropdown').removeClass('open ');
          return 0;

        }else{
          $('.dropdown').find('.dropdown-menu').attr('style', '');

          var menuopen = $(this).closest('.dropdown');
          // menuopen.find('.dropdown-menu').attr('style', '');
          menuopen.find('.dropdown-menu').css('display', 'block');
          menuopen.find('.dropdown-menu').css('top', '0');

          setTimeout(function(){

            $("html, body").stop().animate({scrollTop:menuopen.offset().top}, 300, 'swing', function() {
            });

          },120);
        }

  });


  // $('.navbar-nav li.dropdown').hover(function() {
  //
  //   if (!$(this).hasClass('nomobiledropdownhover')) {
  //     return;
  //   }else{
  //
  //     $('.navbar-nav').find('.open ').removeClass("open ");
  //     $(this).find('.dropdown-menu').stop(true, true).fadeIn('fast', function() {
  //       $(this).attr('style', '');
  //     });
  //     $(this).addClass('open ');
  //
  //   }
  //
  //   if(opmenu == 0){
  //     menu_height($(this),'in');
  //
  //       opmenu = 1;
  //   }
  //
  // }, function() {
  //
  //   if (!$(this).hasClass('nomobiledropdownhover')) {
  //     return;
  //   }else{
  //
  //     $(this).find('.dropdown-menu').stop(true, true).fadeOut("fast", function() {
  //       $(this).css('display', 'none');
  //     });
  //     $(this).removeClass('open ');
  //   }
  //
  //
  //       menu_height($(this),'out');
  //       opmenu = 0;
  //
  // });





  $("#navbarSupportedContent li").hover(
	  function(){
		  if (!$(this).hasClass('nomobiledropdownhover')) {
			  return;
		  }else{
			  $(this).children('ul').hide();
			  $(this).children('ul').slideDown('fast');
			  $(this).addClass('open ');
		  }

		  if(opmenu == 0){
			  menu_height($(this),'in');

			  opmenu = 1;
		  }
	  },
	  function () {

		  if (!$(this).hasClass('nomobiledropdownhover')) {
			  return;
		  }else{
			  $('ul', this).slideUp('fast');
			  $(this).removeClass('open ');
		  }

		  menu_height($(this),'out');
		  opmenu = 0;
	  });


}


function menu_height(elem, type){

    if ($(window).width() > 767 && $(window).width() <= 992 && type == 'in') {



        var t = $(this);
        var h = 0;
        var list = elem.find('.li_same_height');

        console.log('a');
        console.log(list);
        console.log(list.length);

        if(list.length > 0){

          for (var i = 0; i < list.length; i = i +2) {


            var e1 = $(elem.find('.li_same_height')[i]);
            var e2 = $(elem.find('.li_same_height')[(i+1)]);

            if( e1.height() < e2.height()){
              e1.height(e2.height())
            }else{
              e2.height(e1.height())
            }

          }

        }

        // elem.find('.li_same_height').each(function(){
        //
        //
        //     // var previousCss  = $(this).attr("style");
        //     // var optionHeight  = 0;
        //     //
        //     // $(this)
        //     //     .css({
        //     //         position:   'absolute', // Optional if #myDiv is already absolute
        //     //         visibility: 'hidden',
        //     //         display:    'block'
        //     //     });
        //     //
        //     // optionHeight = $(this).height();
        //     // console.log(optionHeight);
        //     //
        //     // $(this).attr("style", previousCss ? previousCss : "");
        //
        //
        //   if( h < $(this).height()){
        //     h = $(this).height();
        //   }
        // })


        // elem.find('.li_same_height').each(function(){
        //   $(this).height(h);
        // })


    }else{

      $('.mega-dropdown').each(function(){
        var t = $(this);


        t.find('.li_same_height').each(function(){
          $(this).css('height', 'auto');
        })


      })

    }

}




// $(document).ready(function(){
//     $("#navbarSupportedContent li").hover(
//     function(){
//         $(this).children('ul').hide();
//         $(this).children('ul').slideDown('fast');
//     },
//     function () {
//         $('ul', this).slideUp('fast');
//     });
// });
