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
function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}
document.getElementById('random').innerHTML = randomInteger(1000, 9999);

