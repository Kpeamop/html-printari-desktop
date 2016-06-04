jQuery(document).ready(function()
 {
  // переключатель вкладок
  jQuery('.similarprint').map(function(i,e)
   {
    jQuery(e).find('.tabs .item').map(function(it,et)
     {
      jQuery(et).click(function()
       {
        jQuery(e).find('.tabs .item').removeClass('sel').eq(it).addClass('sel');
        var sel=jQuery(e).find('.pages .item').removeClass('sel').hide().eq(it).addClass('sel').show();

        if(sel.data('swiper')===undefined)
         {
          jQuery(sel).data('swiper',new Swiper(jQuery(sel).find('.slider'),
           {
            simulateTouch: true,
            nextButton: jQuery(sel).find('.swiper-button-next'),
            prevButton: jQuery(sel).find('.swiper-button-prev'),
            speed: 500,
            slidesPerView: 7,
            //loop: true
           }));
         }
       });
     });

    jQuery(e).find('.pages .item:visible').map(function(it,et)
     {
      jQuery(et).data('swiper',new Swiper(jQuery(et).find('.slider'),
       {
        simulateTouch: true,
        nextButton: jQuery(et).find('.swiper-button-next'),
        prevButton: jQuery(et).find('.swiper-button-prev'),
        speed: 500,
        slidesPerView: 7,
        //loop: true
       }));
     });
   });
 });