$(document).ready(function() {
  $('.slick').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $('.slick-next').css({'display' : 'none'})
  $('.slick-prev').css({'display' : 'none'})

$('.offer__box-info').on('click', '.offer__box-text', (e)=> {
    const srcAttr = $(e.target).data('src');
    $('.lightbox').css('background-image', `url(${srcAttr})`);
  });
});
